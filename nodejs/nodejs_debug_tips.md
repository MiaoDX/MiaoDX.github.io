---
title: Nodejs debug tips
date: 2016-12-11 18:00:00
categories:
  - nodejs
tags:
  - nodejs
---

## What & why

写了一些 `nodejs` 代码之后，深感调试很不方便。百度以及 SO 了一段时间（额，一个多小时）发现了[一个很不错的解决方案](http://stackoverflow.com/a/39901169/7067150)：

<!-- more -->

需要 node 版本 7.×.×：

`node --inspect --debug-brk app.js`

使用 [node-supervisor](https://github.com/petruisfan/node-supervisor) 来监视你对代码的改动，并自动重启 Node。

对应到 npm 的 `package.json` 中可以有如下的设置：

``` javascript
  "scripts": {
    "start": "supervisor ./bin/www",
    "test": "supervisor --inspect --debug-brk ./bin/www"
  },
```

另外，[Chrome DevTools: Live edit running Node.js code with hotswapping](https://umaar.com/dev-tips/119-node-js-hot-code-swap/) 原本看着很炫酷、很实用，可是在我更新了最新的 chrome 没有发现那里有这个功能。
