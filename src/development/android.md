﻿# Androidケータイプロジェクト

　このプロジェクトでは、

* ボタン操作
* 音声読み上げ
* 折り畳み型

という３つの特徴を持ったAndroidOS搭載の携帯端末向けのソフトウェアパッケージを開発しています。
将来的には、Linuxのディストリビューションのような位置づけで、Android&trade;OSとホーム画面、電話帳・メーラなどの基本的なアプリケーションを含む１つのパッケージとして公開し、このパッケージをプリインストールした端末の発売を目指します。

* 移動中・運転中などながら利用の多いユーザに
* より速く、片手でスマートに利用したいプロフェッショナルなユーザに
* アクセシブルな端末として視覚障害のあるユーザに

ボタン操作の端末の需要は決して小さなものではなく、国内で誰も目をつけていないこの市場は大きなビジネスチャンスになると考えています。


## プロジェクト・ムービー

　本プロジェクトの概要を動画でご紹介します。

<video src="/pr1.mp4" controls></video>

## なぜ、ボタン操作なのか

　2010年頃から、携帯電話は高機能化と同時にタッチスクリーンに移行しました。
　タッチスクリーンには直感的な操作感、大画面での動画再生、手書き入力ができるなど多くの良さがあります。

　一方、ボタン操作にも高いカスタマイズ性、片手で画面を見なくても操作が可能である事をはじめ多くの利点があります。
　しかし、ボタン操作の高機能端末が普及することはありませんでした。このような状況となった理由はいくつもありますが、スマートフォンと比較して機能面や作りこみ、本体のハードウェア性能などで差を付けられてしまっていることが最大の要因と思われます。

　そのため

* タッチ操作＝高機能端末
* ボタン操作＝低機能・安価な端末、高齢者向け

という図式が成立してしまっています。

　しかし、インタフェースは操作性を決める者であり、機能の良しあしとは無関係であるはずです。
　同じ機能という土俵の上で、ユーザが各々の利用シーンや好みに応じてインタフェースを選択できる環境を作るべきだと考えています。

## Android&trade;を利用する理由

　Android&trade;OSは国内でも広く普及し、GooglePlayストアをはじめ様々なアプリ配信プラットフォームが整備されています。また、OSはオープンソースで公開されており、カスタマイズが許されています。
　このプロジェクトでは、既存のリソースを可能な限り活用していきます。タッチ端末向けに制作された既存のアプリケーションも、簡単なスクリプトでボタン操作対応にすることが出来るように開発します。視覚障碍者向けにオープンソースで開発されているTalkBackをには、すでにアプリ内のオブジェクトをキーボード操作で移動する機能が搭載されているので、これをベースに開発すれば十分に実現可能です。


## ハードウェア

　このプロジェクトで制作するのはソフトウェアパッケージですが、端末として利用するには必ずハードウェアが必要になります。
　当面の間、本プロジェクトでは[mode 1 retro](https://mode1.jp/md02p)を利用します。この端末は、おそらく国内唯一のRAM2GBと多くの物理ボタンを搭載してた端末です。

## アクセシビリティ

　上記３つの特徴を持った高機能端末は、視覚に障害を持つ人にとって理想的な端末のカタチであると考えています。このプロジェクトでは、障害を持つ人のアクセシビリティも考慮して開発を行います。


## 開発にご協力ください

　このプロジェクトでは、以下のような開発協力をして頂ける方を募集しております。[当研究室](/contact/)までご連絡ください。

* 表示画面のデザイン・グラフィック作成
* コーディング作業
* 本プロジェクトに適した端末のご紹介、開発協力
* Android上でのソフトウェア開発における技術支援
* 音声読み上げエンジンの提供
* 上記動画にないボタン操作端末の魅力や利用シーンのご紹介
* ご意見・ご要望
* その他


