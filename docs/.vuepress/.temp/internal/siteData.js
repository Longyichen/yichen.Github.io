export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/img/logo/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/img/logo/favicon-32x32.png"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "A Thinking Space"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "A Thinking Space"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/icons/apple-touch-icon.png"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#377bb5"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#377bb5"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "A Thinking Space",
      "description": "一期一会"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
