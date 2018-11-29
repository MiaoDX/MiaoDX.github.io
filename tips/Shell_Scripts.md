---
title: Shell Scripts
date: 2017-03-22 20:22:00
categories:
  - Tips
tags:
  - shell
---

Some handy shell scripts useful for myself and maybe others.

<!-- more -->

Nowadays I am using windows a lot, the shell shipped with windows is not so appealing, instead I use [Gow](https://github.com/bmatzelle/gow), however, it's still not the same as *ux systems. So some commands are used in the MINGW64 window come along with Git.

:blush: for both Gow and Git shell

:penguin: for Git shell but not Gow

:scream_cat: for Gow but not Git shell (since it really amazing, can shell in linux like worse than windows?)


## `iconv` :penguin:

`iconv`: Converts text from one encoding to another encoding.

`iconv -f GBK -t UTF-8 gbk_file.txt > utf_8_file.txt`

To convert back, please plus the `-c` configuration to `discard unconvertible characters`

`iconv -c -f UTF-8 -t GBK utf_8_file.txt > gbk_file.txt`

However, it would be better if we can change all files (maybe one specific extension) in a directory to certain encoding.

Here you are:

``` vi
find src_dir/ -name "*.txt" -type f -exec ./change_encoding.sh {} \;
```

see [`change_encoding.sh`](pics/change_encoding.sh) for more info.