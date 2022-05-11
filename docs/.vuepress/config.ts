import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    // ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "A Thinking Space" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "A Thinking Space" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "A Thinking Space",
      description: "一期一会",
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite by default
    "@vuepress/vite",

  // 主题和它的配置
  theme: "vuepress-theme-gungnir",
  themeConfig: {
    repo: "Renovamen/vuepress-theme-gungnir",
    docsDir: "docs",

    hitokoto: "https://v1.hitokoto.cn?c=d&c=i", // enable hitokoto (一言) or not?

    logo: "https://vuejs.org/images/logo.png",

    // personal information
    personalInfo: {
      name: "YiChen",
      avatar: "/img/avatar.jpeg",
      description: "吹灭读书灯，一身都是月",
      sns: {
        github: {
            icon: "ri-github-line",
            link: "Longyichen",
          }, 
        linkedin: "奕龙-陈-443210235",
        // facebook: "renovamen.zou",
        // twitter: "renovamen_zxh",
        // zhihu: "chao-neng-gui-su",
        email: "chenyilong@bupt.edu.cn",
        // rss: "/rss.xml",
        // customized sns
        // bilibili: {
        //   icon: "ri-bilibili-line",
        //   link: "https://www.bilibili.com/",
        // },
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)",
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)",
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)",
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)",
        },
      },
    },

    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "fa-fort-awesome",
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag",
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish",
      },
      // {
      //   text: "文档",
      //   link: "/zh/docs/basic/intro.md",
      //   icon: "ri-book-2-fill",
      // },
    ],

    sidebar: [
      {
        text: "基础",
        children: [
          "/zh/docs/basic/intro.md",
          "/zh/docs/basic/installation.md",
          "/zh/docs/basic/config.md",
          "/zh/docs/basic/search.md",
          "/zh/docs/basic/content.md",
        ],
      },
      {
        text: "进阶",
        children: [
          "/zh/docs/advanced/features.md",
          "/zh/docs/advanced/markdown.md",
          "/zh/docs/advanced/icons.md",
        ],
      },
    ],

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // 拓展语法
      katex: true,
      mermaid: true,
      chartjs: true,
      mdPlus: {
        all: true,
      },
      // github 讨论功能 需要配置
      giscus: {
        repo: "This-is-an-Apple/gitalk-comments",
        repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
        category: "Announcements",
        categoryId: "DIC_kwDODIxYNs4CAO1u",
      },
      // 统计追踪
      ga: "G-EE8M2S3MPB",
      ba: "10b7bc420625758a319d6b23aed4700f",
      // rss
      rss: {
        siteURL: "https://v2.vuepress-theme-gungnir.vercel.app",
        copyright: "Renovamen 2018-2022",
      },
      pwa: true,
      search: true, // use @vuepress/plugin-docsearch instead
      // 时长统计
      readingTime: {
        // excludes: ["/url1", "/url2/.*"], // 不需要进行统计的页面路径（可选，默认：[]）
        // includes: ["/url1", "/url2/.*"], // 需要进行统计的页面路径，如果指定了这一项，那么 `excludes` 项无效（可选，默认：[]）
        wordsPerMinuteCN: 500, // 一分钟可以阅读多少个中文字符（可选，默认：300）
        wordsPerMinuteEN: 200, // 一分钟可以阅读多少个英文字符（可选，默认：160）
        excludeCodeBlock: true, // 是否排除所有代码块内的字符（可选，默认：false）
        excludeTexBlock: true, // 是否排除所有公式块内的字符（可选，默认：false）
      },
    },

    footer: `
        &copy; <a href="https://github.com/Longyichen" target="_blank">Yichen</a> 2018-2022
        <br>
        Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
      `,
  },

  plugins: [
    // [
    //   "@vuepress/plugin-docsearch",
    //   {
    //     // 配置搜索
    //     appId: "3DDLGP0IG4",
    //     apiKey: "6556adaa82b31485309b440a525f264a",
    //     indexName: "v2-vuepress-theme-gungnir",
    //     // 本地化
    //     locales: {
    //       "/zh/": {
    //         placeholder: "搜索文档",
    //         translations: {
    //           button: {
    //             buttonText: "搜索文档",
    //             buttonAriaLabel: "搜索文档",
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: "清除查询条件",
    //               resetButtonAriaLabel: "清除查询条件",
    //               cancelButtonText: "取消",
    //               cancelButtonAriaLabel: "取消",
    //             },
    //             startScreen: {
    //               recentSearchesTitle: "搜索历史",
    //               noRecentSearchesText: "没有搜索历史",
    //               saveRecentSearchButtonTitle: "保存至搜索历史",
    //               removeRecentSearchButtonTitle: "从搜索历史中移除",
    //               favoriteSearchesTitle: "收藏",
    //               removeFavoriteSearchButtonTitle: "从收藏中移除",
    //             },
    //             errorScreen: {
    //               titleText: "无法获取结果",
    //               helpText: "你可能需要检查你的网络连接",
    //             },
    //             footer: {
    //               selectText: "选择",
    //               navigateText: "切换",
    //               closeText: "关闭",
    //               searchByText: "搜索提供者",
    //             },
    //             noResultsScreen: {
    //               noResultsText: "无法找到相关结果",
    //               suggestedQueryText: "你可以尝试查询",
    //               openIssueText: "你认为该查询应该有结果？",
    //               openIssueLinkText: "点击反馈",
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // ],
  ],

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
