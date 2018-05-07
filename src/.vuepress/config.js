module.exports = {
  title: "東京工科大学 田胡研究室",
  description: "東京工科大学 コンピュータサイエンス学部田胡研究室のページです。",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/mplus1p.css' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Top', link: '/' },
      { text: '研究室情報', items: [
        { text: '配属希望の方へ', link: '/about/for3rd.html'},
        { text: '技術スタック', link: '/about/technology-stack.html'}
      ] },
      { text: 'プロジェクト', link: '/projects/' },
      { text: '連絡先', link: '/contact/' },
    ]
  }
}