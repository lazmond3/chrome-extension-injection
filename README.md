# 概要

邪悪なjsが埋め込まれている際に、特定のjsのリソースを別ファイルに置換したり、そのスクリプトの直前に、自作のスクリプトを実行できるようにしたい。

# 現状
- ブロッキングを使うことはできた。
- `webRequest` だけではなく、 `webRequestBlocking`が必要。
- event page ではなく、persistent true にして、background page にする必要があった。

https://developer.chrome.com/extensions/webRequest