import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-3044e74c","/posts/2021-12-24-hello-word.html",{"title":"Hello Word 1"},["/posts/2021-12-24-hello-word","/posts/2021-12-24-hello-word.md"]],
  ["v-ea2bc074","/posts/2021-12-25-hello-word-with-header-image.html",{"title":"Hello Word 2"},["/posts/2021-12-25-hello-word-with-header-image","/posts/2021-12-25-hello-word-with-header-image.md"]],
  ["v-78b93e94","/posts/REPORT%20OF%20%20IMPROVING%20BRAIN%20DECODING%20METHODS%20AND%20EVALUATION.html",{"title":"IMPROVING BRAIN DECODING METHODS AND EVALUATION"},["/posts/REPORT OF  IMPROVING BRAIN DECODING METHODS AND EVALUATION.html","/posts/REPORT%20OF%20%20IMPROVING%20BRAIN%20DECODING%20METHODS%20AND%20EVALUATION","/posts/REPORT OF  IMPROVING BRAIN DECODING METHODS AND EVALUATION.md","/posts/REPORT%20OF%20%20IMPROVING%20BRAIN%20DECODING%20METHODS%20AND%20EVALUATION.md"]],
  ["v-00f362e2","/posts/Report%20of%20Brain%20Decoding%20Using%20fNIRS.html",{"title":"IBrain Decoding Using fNIRS"},["/posts/Report of Brain Decoding Using fNIRS.html","/posts/Report%20of%20Brain%20Decoding%20Using%20fNIRS","/posts/Report of Brain Decoding Using fNIRS.md","/posts/Report%20of%20Brain%20Decoding%20Using%20fNIRS.md"]],
  ["v-2f219688","/posts/Reports%20of%20Visual%20and%20linguistic%20semantic%20representations%20are%20aligned%20at%20the%20border%20of%20human%20visual%20cortex.html",{"title":"Visual and linguistic semantic representations are aligned at the border of human visual cortex"},["/posts/Reports of Visual and linguistic semantic representations are aligned at the border of human visual cortex.html","/posts/Reports%20of%20Visual%20and%20linguistic%20semantic%20representations%20are%20aligned%20at%20the%20border%20of%20human%20visual%20cortex","/posts/Reports of Visual and linguistic semantic representations are aligned at the border of human visual cortex.md","/posts/Reports%20of%20Visual%20and%20linguistic%20semantic%20representations%20are%20aligned%20at%20the%20border%20of%20human%20visual%20cortex.md"]],
  ["v-f0388862","/links/",{"title":"Links"},["/links/index.html","/links/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-d5d13fc0","/tags/test/",{"title":"Tags"},["/tags/test/index.html"]],
  ["v-024395c0","/tags/tag%20with%20space/",{"title":"Tags"},["/tags/tag with space/","/tags/tag%20with%20space/index.html"]],
  ["v-6bc6ea4a","/tags/%E4%B8%AD%E6%96%87%E6%A0%87%E7%AD%BE/",{"title":"Tags"},["/tags/中文标签/","/tags/%E4%B8%AD%E6%96%87%E6%A0%87%E7%AD%BE/index.html"]],
  ["v-db999fcc","/tags/Brain%20Decoding/",{"title":"Tags"},["/tags/Brain Decoding/","/tags/Brain%20Decoding/index.html"]],
  ["v-1f708f76","/tags/Computer%20Science/",{"title":"Tags"},["/tags/Computer Science/","/tags/Computer%20Science/index.html"]],
  ["v-537f0498","/tags/Computational%20Neuroscience/",{"title":"Tags"},["/tags/Computational Neuroscience/","/tags/Computational%20Neuroscience/index.html"]],
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
