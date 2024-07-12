import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Joe Tynan",
  description: "A development blog by Joe Tynan. I post about HTML, CSS, JavaScript, Django and more!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Django Posts', link: '/django' }
    ],

    sidebar: [
      {
        text: 'Categories',
        items: [
          { text: 'Django', link: '/django' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  sitemap: {
    hostname: 'https://joetynan.co.uk',
  },
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
})
