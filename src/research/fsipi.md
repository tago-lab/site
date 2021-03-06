# 事前登録無しでの個人識別の研究

## 人間により近い個人識別

昨今、スマートフォンなどにも搭載された個人識別機構ですが、
利用する前に必ず持ち主の情報を登録するという工程を経て利用できるようになる機構のはずです。
一つの端末に対して持ち主を一人登録するのは簡単な事ですが、もし不特定多数の人物を識別したい場面に会ったとき、不特定多数の人物全員を登録することは現実的なことでしょうか。

人間は不特定多数の人物を識別することが可能な認識機構を持つ生物です。
しかも顔を見ずとも声や服などの断片的な情報だけでも識別が行えるケースもあります。
それは、人間が認識できる情報から継続的に識別する対象の情報を蓄積し、結び付ける事が可能だからです。
ロボットにそれと同様の識別機構を持たせるためには、様々なセンサー、特徴量を結び付ける要素技術の両方が求められます。

本研究では、予め個人の情報を登録するという既存の機構よりも人間の識別機構に近い機構として、動画像から動的に特徴量を蓄積し、個人を識別します。

将来的には、白いビニール製のヘルスケアロボットのように、人間個人に対してコミュニケーションを取る機能が搭載されたロボットが製作されることを展望します。


## 単位時間の異なる特徴量を用いた段階的クラスタリング手法

研究としてはこちらが主題です。

個人識別には顔や生体情報を特徴量として使用しますが、動画像には必ずしもこれらが映っているとは限りません。
一般的な監視カメラのような撮影環境において映った人間の画像を分類する実験を行いましたが、
個人を識別できる特徴量である顔が映っているデータは、全体の１割ほどしかありませんでした。

そこで、本研究では、顔に加え服装や骨格など、複数の特徴量を用いて分類を行いました。
本来、服装のように毎日変化する特徴量は個人識別には向きません。
しかし、一日以内の短期間において分類するのには十分な特徴量であることが判明しました。

この結果を踏まえ、骨格や顔などの短期間では変化しない特徴量と、服装を用いて分類を行った結果を結び付ける手法を提案しました。
これにより、顔の写っていない９割以上の画像も識別に活用できるようになります。
特に、自然な風景上から不特定多数の個人識別を行う際などに有用です。
