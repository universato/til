
# 結論

`rubocop`の引数に、親ディレクトリや親ファイルを指定しないものとする。

親方向に向けて、そのファイルが1番近い`.rubocop.yml`が1番優先される。
次に、コマンド実行ディレクトリの`.rubcop.yml`が(コマンド引数での対象ファイル)全体に適用される。
ここで、2つの`.rubcop.yml`が見られるが、コマンド実行ディレクトリに新しいルールがあれば、それは全体に適用される。例えば、コマンド実行位置のディレクトリに新しくrubocop-railsがあり、Railsルールがあれば、全体に適用される。
もし、コマンド実行ディレクトリの`.rubocop.yml`がなければ、`~/rubocop.yml`が見られ、全体に適用される。

#

~/til/ruby/rubo/cop
~/til/ruby/rubo/cop/cop.rb
~/til/ruby/rubo/rubo.rb

~/til/ruby/ruboで実行。
`~/til/ruby/rubo/.rubocop.yml`がない場合。
- 上の階層の`~/til/ruby/.rubocop.yml`のような親.rubocopは完全に無視。
- `~/.rubocop.yml`が見られていた。
  ただし、子ディレクトリに.rubcoopディレクトリがある場合、そこにある子ファイルにrubocop.ymlが優先される。
  これは、同ルールの場合に優先されるだけで、例えば別にRailsルールがホームディレクトリの.rubocop.ymlにある場合、こちらも適用される。

コマンド実行ディレクトリにある場合、

ホームディレクトリ
実行ディレクトリ
対象ファイル・ディレクトリ

実行ディレクトリに.rubocop.ymlがなければ、それより上の階層の.rubocop.ymlが見られる。
対象ディレクトリに別の.rubocop.ymlがあれば、その対象ディレクトリ内のファイルのみ.rubocop.ymlが優先される。
