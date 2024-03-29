import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/chenyilong/Projects/yichen.Github.io/node_modules/vuepress-theme-gungnir/lib/client/layouts/404.vue")),
  "HomePage": defineAsyncComponent(() => import("/Users/chenyilong/Projects/yichen.Github.io/node_modules/vuepress-theme-gungnir/lib/client/layouts/HomePage.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/chenyilong/Projects/yichen.Github.io/node_modules/vuepress-theme-gungnir/lib/client/layouts/Layout.vue")),
  "Links": defineAsyncComponent(() => import("/Users/chenyilong/Projects/yichen.Github.io/node_modules/vuepress-theme-gungnir/lib/client/layouts/Links.vue")),
  "Post": defineAsyncComponent(() => import("/Users/chenyilong/Projects/yichen.Github.io/node_modules/vuepress-theme-gungnir/lib/client/layouts/Post.vue")),
  "Tags": defineAsyncComponent(() => import("/Users/chenyilong/Projects/yichen.Github.io/node_modules/vuepress-theme-gungnir/lib/client/layouts/Tags.vue")),
}
