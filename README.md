# 概要
タイトルコピーするtypescriptを使ったchrome拡張機能
https://qiita.com/markey/items/ea9ed18a1a243b39e06e

```bash
yarn add webextension-polyfill-ts # Chrome APIでPromiseを使えるpolyfill
yarn add -D typescript webpack webpack-cli copy-webpack-plugin ts-node ts-loader @types/webpack @types/copy-webpack-plugin

# 一通りinit

yarn init
yarn tsc --init

```

## 構成

event page がキーボードショートカットを受け取り、
content scripts に対して、メッセージを送る、という仕組みで、DOM操作を行う。

- Content Scripts
ページのDOMを操作(取得・追加・更新・削除)できるscript。(3つの登場人物の中では唯一)
ただし、アクセスできるChromeのAPIは一部に制限されている。
これを使って特定のページに独自のUIを埋め込んだりできる。

- Browser Action(Page Action)
アドレスバー右に並んでいる拡張機能のアイコンをクリックしたときのアクション。
様々なChromeのAPIにアクセスできる。

- Event Page(Background Page)
Chromeが動いている間に裏で動いているスクリプト。
Browser Action同様、様々なChromeのAPIにアクセスできる。
Background Pageは非推奨。