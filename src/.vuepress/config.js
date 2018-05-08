module.exports = {
  ga: 'UA-118878992-1',
  locales: {
    '/': {
      lang: 'ja',
      title: '東京工科大学 田胡研究室',
      description: '東京工科大学 コンピュータサイエンス学部田胡研究室のページです。'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/mplus1p.css' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Top', link: '/' },
      { text: '研究室情報', items: [
        { text: '配属希望の方へ', link: '/about/for3rd.html'},
        { text: '技術スタック', link: '/about/technology-stack.html'},
        { text: '進路情報', link: '/about/cource.html'},
        { text: 'SNS', link: '/about/sns.html'}
      ] },
      { text: 'プロジェクト', link: '/projects/' },
      { text: '連絡先', link: '/contact/' },
    ]
  }
}