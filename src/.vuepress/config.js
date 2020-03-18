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
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['script', { src:'/9xWGpLnLTrCv9OIBGO3JVxKM9cZslH1l.js', type: 'text/javascript' }]
  ],
  themeConfig: {
    nav: [
      { text: '配属希望の方へ', link: '/about/for3rd.html'},
      { text: '研究室情報', items: [
        { text: '技術スタック', link: '/about/technology-stack.html'},
        { text: '進路情報', link: '/about/cource.html'},
        { text: 'SNS', link: '/about/sns.html'}
      ] },
      { text: '活動内容', items: [
        { text: 'プロジェクト紹介', link: '/projects/' },
        { text: '技術研究', link: '/research/' },
        { text: 'ソフトウェア開発', link: '/development/' },
        { text: 'ビジネス', link: '/business/' },
      ] },
      { text: '連絡先', link: '/contact/' },
    ]
  }
}
