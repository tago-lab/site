# site
東京工科大学 田胡研究室公式サイト(https://www.t-lab.cs.teu.ac.jp)

## 開発用サーバーの起動方法

```sh
$ git clone git@github.com:tago-lab/site.git
$ cd site
$ npm i
$ npm run dev
```

`http://localhost:8080`にブラウザでアクセスするとサイトが表示されます。

## ビルド方法
```sh
$ npm run build
```

以上のコマンドを実行すると`src/.vuepress/dist`以下にビルドの成果物が出力されます。

## 更新方法
`src`以下に配置したMarkdownファイルをビルドの際に自動的にHTMLに変換します。`index.md`または`README.md`という名前で保存するとディレクトリのトップのページになります。(`src/hoge/index.md`に保存したファイルは`/hoge/`で閲覧することができます。)

---

このサイトは[VuePress](https://vuepress.vuejs.org/)で開発されています。

また、デフォルトテーマを`eject`し一部カスタマイズして使用しています。

カスタマイズ方法などについては公式ドキュメントを参照してください。

