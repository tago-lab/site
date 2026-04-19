import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'ja-JP',
  title: '東京工科大学 田胡研究室',
  description: '東京工科大学 コンピュータサイエンス学部田胡研究室のページです。',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/mplus1p.css' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    // ['script', { src:'/9xWGpLnLTrCv9OIBGO3JVxKM9cZslH1l.js', type: 'text/javascript' }]
  ],

  theme: defaultTheme({
    logo: '/tlab_logo.png',
    logoAlt: 't-lab logo',
    home: '/index',
    sidebar: false,
    navbar: [
      { text: '配属希望の方へ', link: '/about/for3rd'},
      { text: '研究室情報', prefix: 'about/', children: [
        { text: '技術スタック', link: 'technology-stack'},
        { text: '進路情報', link: 'course'},
        { text: 'SNS', link: 'sns'}
      ] },
      { text: '活動内容', children: [
        { text: '技術研究', link: '/research/index' },
        { text: 'ソフトウェア開発', link: '/development/index' },
        { text: 'ビジネス', link: '/business/index' },
      ] },
      { text: '連絡先', link: '/contact/' },
    ],
  }),

  bundler: viteBundler(),
})
