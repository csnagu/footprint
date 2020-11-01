# Node.js + Express + TypeScript で WebAPI を作る

ref:

- 1/4 <https://qiita.com/s-yoshida/items/054d44c49649f766d19a>
- 2/4 <https://qiita.com/s-yoshida/items/ac1cb987a2bf96df3dd0>
- 3/4 <https://qiita.com/s-yoshida/items/2b7cf1be43b1444a1af4>
- 4/4 <https://qiita.com/s-yoshida/items/5ac5da205ea502f1a169>

## 目的

- [ x ] node.js ベースの WebAPI 作成方法を理解する
- [ x ] express と typescript を組み合わせた API 作成方法を理解する
- [ x ] MongoDB の使い方を理解する

## やること

- 写経

<details><summary>メモ</summary><div>

- node.js ベースの WebAPI 作成方法を理解する

  - 今回は Express を使っていて、Express.Router()に他のルーティングルールや parser といったものをバインドしていけるっぽい
  - 機能ごとにディレクトリやモジュールを切って `server.ts` にまとめていたので保守がしやすそう

- express と typescript を組み合わせた API 作成方法を理解する

  - `@types/express` が大事
  - Express.Request や Express.Response を型として指定できるっぽい

- MongoDB の使い方を理解する

  - mongoDB のほかに mongoose とかいうのもあるらしい
  - とりあえずコンソールからクエリ叩いてなるほどなってできるようになった気がする

- その他

  - nyc + mocha ではじめたが jest だとサマリレポート取れたような気がする
  - tsconfig なんもわからん
  - log4js の設定を外に出しておいて、log4js のラッパークラスを作成して汎用性高めているのがためになった

  </div></details>
