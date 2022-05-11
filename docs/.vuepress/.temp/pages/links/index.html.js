export const data = {
  "key": "v-f0388862",
  "path": "/links/",
  "title": "Links",
  "lang": "en-US",
  "frontmatter": {
    "layout": "Links",
    "title": "Links",
    "links": [
      {
        "title": "Live Demos",
        "items": [
          {
            "sitename": "ME?",
            "url": "https://zxh.io",
            "img": "/img/links/me.png",
            "desc": "My blog"
          }
        ]
      },
      {
        "title": "Other Versions",
        "items": [
          {
            "sitename": "VuePress 1",
            "url": "https://vuepress-theme-gungnir.vercel.app",
            "img": "/img/links/v1.svg",
            "desc": "VuePress 1 theme"
          },
          {
            "sitename": "Jekyll",
            "url": "https://jekyll-theme-gungnir.vercel.app",
            "img": "/img/links/jekyll.png",
            "desc": "Jekyll theme"
          }
        ]
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "links/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
