import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-f0388862","/links/",{"title":"Links"},["/links/index.html","/links/README.md"]],
  ["v-3044e74c","/posts/2021-12-24-hello-word.html",{"title":"Hello Word 1"},["/posts/2021-12-24-hello-word","/posts/2021-12-24-hello-word.md"]],
  ["v-ea2bc074","/posts/2021-12-25-hello-word-with-header-image.html",{"title":"Hello Word 2"},["/posts/2021-12-25-hello-word-with-header-image","/posts/2021-12-25-hello-word-with-header-image.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-d5d13fc0","/tags/test/",{"title":"Tags"},["/tags/test/index.html"]],
  ["v-024395c0","/tags/tag%20with%20space/",{"title":"Tags"},["/tags/tag with space/","/tags/tag%20with%20space/index.html"]],
  ["v-6bc6ea4a","/tags/%E4%B8%AD%E6%96%87%E6%A0%87%E7%AD%BE/",{"title":"Tags"},["/tags/中文标签/","/tags/%E4%B8%AD%E6%96%87%E6%A0%87%E7%AD%BE/index.html"]],
  ["v-3a1f8885","/page/1/",{"title":"Home"},["/page/1/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
