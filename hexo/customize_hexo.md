---
title: Customize hexo
date: 2017-03-23 11:28:00
tags: 
  - hexo
---

Things done to my hexo blog

<!-- more -->

## Drawbacks

### `---` un-support

when render file with many `---` as diViding line, hexo failed in one way or another.

So change `---` to `***` and done this forever :(


### Replace [`hexo-renderer-marked`](https://github.com/hexojs/hexo-renderer-marked) with [`hexo-renderer-pandoc`](https://github.com/wzpan/hexo-renderer-pandoc)

I want to refer to images in file, something like below:

``` vi
Please see figure \ref{answer_is_42} for more info.

[...]

![answer_is_42](pics/answer_is_42.png){#fig:answer_is_42}

```

However, it seems that `-marked` won't allow it.

### Image reference

Last example still won't get things like in `pandoc -f markdown -t latex`, since `pandoc -f markdown -t html` will just drop the `\ref{answer_is_42}`, some whispers said that with `--mathjax` switch can save `$\ref{..}$` but I in the HTML page generated still can not refer to the image.
