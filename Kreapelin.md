以下は、最新の変更をすべて反映した**クレペリン検査用数列生成およびテスト実施の仕様**の全体像です。

---

## 1. 数列全体構成
- **1行あたりの数字数:** 116個  
  - 隣接する数字の加算は116個中115回行われる。

---

## 2. 使用する数字
- **使用可能な数字:** 3, 4, 5, 6, 7, 8, 9  
- **使用しない数字:** 0, 1, 2

---

## 3. 連続性・重複に関するルール
1. **同じ数字の連続禁止**  
   - 例: 「3 4 4」はNG
2. **1つおき（隔桁）の同数字禁止**  
   - 例: 「4 3 4」はNG

---

## 4. 5つごとの部分列（ブロック）における和の条件
- **条件1:** 5つの連続する数字の中に、隣り合う2数字の和が **10以下** となるペアが少なくとも1組存在する。
- **条件2:** 5つの連続する数字の中に、隣り合う2数字の和が **15以下** となるペアが少なくとも1組存在する。  
（いずれも、「どこかの隣接ペアが該当すればOK」とする）

---

## 5. 数列生成アルゴリズム（概要）
1. **初期2桁の生成**  
   - 数列は、3～9の範囲から重複しない2つの数字をランダムに選んで開始する。
2. **数字の追加**  
   - 新たに追加する際、直前2桁と同じ数字は避ける。  
   - また、1つおきに同じ数字が現れないようにする。  
   - 追加時には、直近の5桁ブロックに対して、条件1および条件2の両方を満たすかチェックし、満たさなければ再抽選する。
3. **116桁に到達するまで繰り返す**  
   - 上記ルールと条件をクリアする数字を順次追加して、最終的に1行116桁の数列を生成する。

---

## 6. テストの目的
- 被験者が左右の数字を加算（各行115回）する作業を通して、作業曲線、集中力、持続力などを評価する。

---

## 7. 行数・配置と予備行の構成
- **前期:** 15行  
- **前期予備:** 2行  
- **後期:** 15行  
- **後期予備:** 2行  
- **背景:**  
  - テスト中、被験者が途中で加算中の行を誤って記入してしまう場合があるため、修正の時間が確保できません。  
  - そのため、誤った行で加算を続けても、全体の評価に影響が出にくいよう、予備行を設けています。

---

## 8. テスト時間の仕様
- **1行あたりの時間:** 1分間  
  - 各1分ごとに「次の行に移ってください」などのアナウンスがあり、被験者はその都度新しい行で加算作業を開始する。
- **テスト全体の時間配分:**  
  - **前期:** 15分（15行）  
  - **休憩:** 5分  
  - **後期:** 15分（15行）  
  - **合計:** 35分  
  - ※ 予備行は、実際のテスト行に含まれないが、誤記入時の保険として用意される。

---

以上が、現時点でまとめた最新のクレペリン検査用数列生成およびテスト実施の仕様です。  
何かご質問や追加の変更点があればお知らせください。