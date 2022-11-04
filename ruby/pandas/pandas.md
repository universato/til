
```ruby
require 'pandas'
df = Pandas.read_html('titanic.csv')
```

# エラー

```
~/.rbenv/versions/3.1.0/lib/ruby/gems/3.1.0/gems/pycall-1.4.1/lib/pycall.rb:74:in `import_module': <class 'ModuleNotFoundError'>: No module named 'numpy' (PyCall::PyError)
```

↓
```console
$ pip install numpy
```

`numpy`をインストールしたあと、同様のエラーが`pandas`で起きる。

```console
$ pip install pandas
```

これで`Pandas.read_csv`などが使えるようになった。
しかし、`Pandas.read_html`を使おうとすると、次のエラーになった。

```console
$ ruby main.rb
~/.rbenv/versions/3.1.0/lib/ruby/gems/3.1.0/gems/pycall-1.4.1/lib/pycall/pyobject_wrapper.rb:43:in `read_html': <class 'ImportError'>: lxml not found, please install it (PyCall::PyError)
  File "~/.pyenv/versions/3.10.7/lib/python3.10/site-packages/pandas/util/_decorators.py", line 331, in wrapper
    return func(*args, **kwargs)
  File "~/.pyenv/versions/3.10.7/lib/python3.10/site-packages/pandas/io/html.py", line 1205, in read_html
    return _parse(
  File "~/.pyenv/versions/3.10.7/lib/python3.10/site-packages/pandas/io/html.py", line 982, in _parse
    parser = _parser_dispatch(flav)
  File "~/.pyenv/versions/3.10.7/lib/python3.10/site-packages/pandas/io/html.py", line 939, in _parser_dispatch
    raise ImportError("lxml not found, please install it")
        from ~/.rbenv/versions/3.1.0/lib/ruby/gems/3.1.0/gems/pycall-1.4.1/lib/pycall/pyobject_wrapper.rb:43:in `method_missing'
        from z.rb:4:in `<main>'
```
↓
色々と怒られてるけど、大事なのはココ(かな)。
```console
pycall/pyobject_wrapper.rb:43:in `read_html': <class 'ImportError'>: lxml not found, please install it (PyCall::PyError)`
```
↓
インストールすれば、解決。
```console
$ pip install lxml
```

`Pandas.read_html`が呼んでいる、pandasの`read_html`は、`lxml`というのを使うらしいのでインストールしてあげる。そうしたら、動いた。


```ruby
# require 'numpy'
# require 'pycall/import'
# include PyCall::Import
require 'pandas'
df = Pandas.read_csv('titanic.csv')
p df.columns
# df = df.fillna({'Age'=> 100})
# df = df.fillna({Age: 100})
# df = df.fillna(Age: 100)
p df

# df = Pandas.read_html("https://livequiz.work/minhaya1/")[0]
# df.to_pickle("quizes.pickle")
# df.to_csv("quizes.csv")
# df.to_pickle("quizes.pickle")
# df.to_pickle("quizes.pickle")
# quizes = Pandas.read_csv("quizes.csv")

quizes = Pandas.read_pickle("quizes.pickle")

# quizes = quizes.fillna({'最初の文字': ''})
# quizes.loc[quizes['解答'] == quizes['読み'], '読み'] = ''
# quizes = quizes.sort_values('正解率', ascending=False)

s = PyCall.eval("'最初の文字'")
p s.class
# p quizes.head(2)
# p quizes.info
# p quizes.columns
# p quizes["問題"]
# x = quizes.columns[-1]
# quizes = quizes.fillna('')

def Dict(hash_object)
  PyCall::Dict.(hash_object)
end

dict = PyCall::Dict.({"最初の文字": ''})

# d = Dict({最初の文字: ''})
# d = Dict({"最初の文字" => ''})
quizes = quizes.fillna(d)

# quizes = quizes.fillna({'最初の文字'=>''})
# quizes = quizes.fillna({'最初の文字': ''})
# quizes = quizes.fillna({最初の文字: ''})
# quizes = quizes.fillna({s=> ''})
# quizes = quizes.fillna({最初の文字: ''})
quizes.loc[quizes['解答'] == quizes['読み'], '読み'] = ''

quizes = quizes.sort_values('正解率', ascending: false)

p quizes.head(10)

__END__
puts df.groupby(:Sex)[:Survived].describe
#         count      mean       std  min  25%  50%  75%  max
# Sex
# female  314.0  0.742038  0.438211  0.0  0.0  1.0  1.0  1.0
# male    573.0  0.190227  0.392823  0.0  0.0  0.0  0.0  1.0

puts df.groupby(:Sex)[:Age].describe
#         count       mean        std   min   25%   50%   75%   max
# Sex
# female  314.0  27.719745  13.834740  0.75  18.0  27.0  36.0  63.0
# male    573.0  30.431361  14.197273  0.42  21.0  28.0  38.0  80.0

```


```
2021/4/27
kojix2
  08:07
PyCallの初心者向け資料どうあるべきなのか考えてみたけど、
* How does it work? 的な、なぜPyCallが動くのかのポンチ絵と仕組み
* Ruby→PythonとPython→Rubyの各種オブジェクトの変換方法のリスト
が欲しいな
ここの資料が比較的整っている…
https://qiita.com/stat/items/a383451e7f824e4c9627
QiitaQiita
PyCall Ruby版 Tips - Qiita
　　　pycall公式ロゴ はじめに PyCallは mrkn さんが開発されている、Python のライブラリを Ruby や Julia で利用するためのブリッジライブラリです。 https://github.com/... (31 kB)
https://qiita.com/stat/items/a383451e7f824e4c9627

08:08
How dose it work は、あったからといって自分の頭で理解できるわけじゃないんだけど、ないと不安になるので必要。

kojix2
  08:18
恐らくどちらも原作者にとっては自明なことで、ソース（作品）を直接見ようという話やも知れないけど、第三者の素人（自分など）がソースを読むのは容易ではないし、Ruby-Pythonバイディングの世界の構成の仕方は一通りではなくて、作者の意図により、個性や創造力が表れるところだと思います。

kojix2
  08:24
そのへんに、PyCall.rbがJuliaからの移植だとしても、Pythonのライブラリを呼べて便利以上のものが多少あるはずなので、PyCallはPythonのライブラリーが呼べて便利という小さな話ばかりクローズアップされるのにずっと反発がある。PyCallに関しては数年前にいろいろ思っていたのでこの機会に全部吐き出しました。

mrkn
  08:56
何があるんですか？
作者の気持ちとしては「Python のライブラリを呼べて便利」というだけなんですよね・・・

kojix2
  09:00
PyCallのソースコード、いつか読む

mrkn
  09:01
PyCall は、CRuby のオブジェクトモデルと Python のオブジェクトモデルと Python の C API が分かっていれば簡単に読めると思います

kojix2
  09:02
全部わからんけどとりあえず眺めます

mrkn
  09:05
PyCall を自由に使いこなすには CRuby のオブジェクトモデルと Python のオブジェクトモデルの双方を知ってる必要はあります。それら2つのオブジェクトモデルの差異をどうやって埋めているかについて、PyCall はちゃんと説明しておく必要はあると思います。いまは README にちょろっと書いている程度の情報しか無いので、整備されていないのは事実です。整備されていない理由は、私がまだ PyCall が fix してると思えてなくて、ドキュメントを書くモチベーションがないからです。

mame
  09:15
オブジェクトモデルとかはいいんで、ぐぐって見つかったPythonのスニペットをどう書き換えたら大体動く、みたいなチートシートは欲しいと思ってた

mrkn
  09:18
コンストラクタ呼び出しを .new に変えるのと、オブジェクトの __call__ を呼び出す記法を .() に変えるのと、キーワード引数の渡し方を変えくらいかなぁ。
機械的に書き換えられるのはキーワード引数の呼び出し方くらいですね
チートシートも、PyCall が fix したなと感じたら作ると思います

mrkn
  09:25
これら3つの書き換えについては matplotlib, numpy, pandas, scikit-learn の一部の機能では実際に確認済みで成立するんだけど、他のライブラリでも成立するのかどうか分からないからなぁ

mrkn
  10:53
とりあえず、現時点で書いても大丈夫そうなことは README に追加しました。
```
