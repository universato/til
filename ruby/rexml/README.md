Gemfile.lock
```rb
PATH
  remote: .
  specs:
    sample_gem (0.1.0)
    sample_gem27 (0.1.0)

GEM
  remote: https://rubygems.org/
  specs:

PLATFORMS
  ruby

DEPENDENCIES
  sample_gem!
  sample_gem27!

BUNDLED WITH
   2.2.21
```

```
$ ruby -v
ruby 2.7.3p183 (2021-04-05 revision 6847ee089d) [x86_64-darwin19]
$ bundle exec ruby -v   
ruby 2.7.3p183 (2021-04-05 revision 6847ee089d) [x86_64-darwin19]

$ bundle exec ruby r.rb
Traceback (most recent call last):
        1: from r.rb:1:in `<main>'
r.rb:1:in `require': cannot load such file -- rexml (LoadError)
```

`bundle exec`がないと、外部gemを呼び込めない。
`sample_gem`や`sample_gem27`を呼べない。

```
$ bundle exec ruby -v
ruby 3.0.1p64 (2021-04-05 revision 0fb782ee38) [x86_64-darwin19]
```

Ruby 3.0以上だと、`bundle exec ruby r.rg`で、
Gemで呼び込まれている`rexml/document`が呼び込めず、LoadErrorになる。
素の`require 'rexml'`も呼び込めない。
