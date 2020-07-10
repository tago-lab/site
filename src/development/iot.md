<style>
img {
    border: 1px lightgray solid;
}
</style>

# iOt Project

<!-- ***圧倒的イノベーションを実現し、世界を変える（激臭キャッチコピー）*** -->

近年のAI界隈のトレンドは、ロボット制御のような問題を含むGroundedなタスクと機械学習を組み合わせた、自律的な知能を構築することにシフトしつつあります。本プロジェクトでは、そういった最先端の研究領域を対象として活動を行っています。

キーワード：
**\#IoT \#フォグコンピューティング \#機械学習 \#ROS \#画像処理 \#OSS開発 \#認知ロボティクス \#Docker \#SmashBros**

## Our vision

プロジェクト目標は「より生物的で高度な知能」をもつロボットを実現することです。実現のためのアプローチとして、

- AI（ソフトウェア）側のアプローチ
- インフラ側のアプローチ

の2つの側面から取り組み、あらゆる分野をカバーする形で研究開発を行っています。

### AI
キーワード：
**\#Python \#アルゴリズム \#深層強化学習 \#OpenAIGym \#Tensorflow \#PyTorch**

機械学習を用いてロボットを高度に制御するシステムを実現することを目標に、「知能システム」のアーキテクチャを工学的に解明することを目指します。特に、深層強化学習を用いた最適化をキーとして、以下の機能についての検討を行っています。将来的にはこれらを統合し、実環境下に置かれたロボットが自らの意思で能動的に行動できるようになることを目指しています。

- 外界を認識して適切に表現する機能
- 論理的に高度な解法の発見を行う機能
- 実環境での行動に変換して実行する機能

<center><a href="http://drive.google.com/uc?export=view&id=1YUWImQ4lMO8-UVgf6UBOV_-fHslgvhfT"><img width=400 src="http://drive.google.com/uc?export=view&id=1YUWImQ4lMO8-UVgf6UBOV_-fHslgvhfT" title="未知の環境でモノさがしをするロボット" /></a></center>

<br>

現在は、抽象的なシミュレーション環境下で戦略を発見・生成させるためのアルゴリズムや、ロボットを直接制御するレイヤでのアーキテクチャに関する検討を行っています。また、ここでの理論に基づいて行動制御を記述するためのPythonフレームワークを開発しています。

<center><a href="http://drive.google.com/uc?export=view&id=1Y_L7Gxk5o_XFsOMha-7myY6g17KER3tB"><img width=400 src="http://drive.google.com/uc?export=view&id=1Y_L7Gxk5o_XFsOMha-7myY6g17KER3tB" title="階層的な強化学習によるROS制御アーキテクチャ" /></a></center>

### Infrastructure
キーワード：
**#Python #C++ #クラウドコンピューティング #Kubernetes #Docker**

プロジェクトにおけるロボットを用いた研究開発に必要なインフラを提供するため、主に以下の要素について開発および検討を行っています。

- Middleware for Artificial General Intelligence（MAGI）
- ロボット端末
- フォグコンピューティング基盤


#### Middleware for Artificial General Intelligence（MAGI）

MAGIとは、本プロジェクト内で生み出されたAIロボット研究開発プラットフォームです。このミドルウェアを用いることで、AIを利用した複雑なロボットシステムの制御構造をクラウド上で容易に構築することができます。

<!-- 現在iOtプロジェクトで「より生物的な知能」を持つロボットの実現を目指していますが、このようなシステムでは、幅広いインフラとAIの知識が必要となり、容易ではありません。また、技術的に多くのAIを必要とするため、多くのAI研究者と協力する必要があります。 -->

MAGIは現在も開発中です。ロボットとの連携を伴う開発の敷居を下げ、「より生物的な知能」を持つロボットの研究開発活動を促進させることを目標としています。

<center><a href="https://imgur.com/TjDXR4a"><img width=400 src="https://i.imgur.com/TjDXR4a.png" title="MAGIの概念図" /></a></center>

#### ロボット端末

多くの人がロボットを用いた研究開発を行えるようにするため、安価なロボットデバイスの実現を目指します。MAGIと併用できるような形で、ハード/ソフトウェア構成を最適化するための取組みを行っています。

<center><a href="https://imgur.com/iwZcfi4"><img width=400 src="https://i.imgur.com/iwZcfi4.jpg" title="Bossのエヴァたち（初号機・弐号機）" /></a></center>

#### フォグコンピューティング基盤

多数の計算機と通信回線からなる複雑な構成において、アプリケーションプログラムの実行性能を確保するための方法について検討することが重要になりつつあります。このような、分散処理形態はフォグコンピューティングと呼ばれます。

クラウド・エッジルータ・IoTデバイスからなる複雑な構成において、アプリケーション側が構成するプログラムのリストや必要な資源情報を管理することで、不足資源を割り当てるフォグコンピューティング基盤を開発します。これにより、高機能なIoTデバイスの実現を目指します。

<!-- 現在は、各計算機と通信回線の資源情報をモニタリングするための機構を開発しています。 -->


## 参考画像
<!-- 
※ 研究/開発時の様子など，関係する画像をテキトーに散りばめる
※ 詳しい説明なんて不要（詳細が気になったら聞きに来いスタイル） -->

<center><a href="http://drive.google.com/uc?export=view&id=11HPXybOu2rd1qGh93KRW-XjiVH_3my_g"><img width=400 src="http://drive.google.com/uc?export=view&id=11HPXybOu2rd1qGh93KRW-XjiVH_3my_g" title="ガルパン戦車" /></a></center>

</br>

<center><iframe width="500" height="300" src="https://www.youtube.com/embed/9jzEAZvQ8Eg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>