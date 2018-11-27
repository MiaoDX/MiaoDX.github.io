---
title: Debug_python_with_docker_in_pycharm
date: 2016-11-13 20:14:00
tags: 
  - debug 
  - docker
---

## Why

As I really really appreciate it that we can have a `isolated` develop environment, when I heard [`pycharm` can debug with docker](https://blog.jetbrains.com/pycharm/2015/10/announcing-pycharm-5-eap-143-165-docker-integration/), I was more than happy. However, things are not that easy.

<!-- more -->

## What I got

I tried, tried and tried. At an amzing monment I succeeded running docker on windows throgh DockerToolbox. Mostly, I refer [One answer to Running a Docker image in PyCharm causes “Invalid volume specification”](http://stackoverflow.com/a/39968174/7067150).(By the way, my machine and environment is exactly like the answer)

BUT suddenly I failed to repeat it.

## So I changed to try it on ubuntu

Unbuntu 14.04 in virtualbox.
The default settings when add docker as shown below is not suitable for unbuntu 14.

![add_docker_linux](http://images2015.cnblogs.com/blog/1021346/201611/1021346-20161113202151702-1457899639.png)

According to [another SO question's answer](http://stackoverflow.com/a/39971120/7067150), adding `unix:///var/run/docker.sock` to the `API URL` shows `Connection successful` when click `Apply`. But when running programs it still won't work.


## And then

Problem partially solved, when we use docker to debug our project throgh PyCharm, it's not `attach` to a running docker and/or `exec` the commands (by now). Instead it start a new `Containner` and run the commands, so if we want to debug a python file, we should make sure the docker running `python` when open. 

In other word, the `Dockerfile` better with last sentence:

``` Dockerfile
CMD ["python3"]
```

And in linux (ubuntu) when this assured, all things is OK. And now I can debug with [`alpine-python`](https://github.com/Tsutomu-KKE/alpine-python/blob/master/jupyter/Dockerfile)

## TODO

After succeeded in linux, I go back and try in windows, it's surely a bug of pycharm and hope can be solved in latter version.

And what's more, what I really want is more than this, I hope as below:

``` vi

+------------------------------+
|                              |                  +------------------+    +-------------------+
|                              | <----------------+                  |    |                   |
|      Docker/rkt/others       |                  |    Desktop UI    XXXXXX     Happy ME      |
|                              +----------------> |                  |    |                   |
|                              |                  +------------------+    +-------------------+
+------------------------------+
      Some remote servers

```

In other word, no applications on PC/Desktop, no more reinstall systems, no different configurations, no more `configurations problems`! But with full control of what we use.

I will review related techs in the future, and this is another weekend I spent `play` with docker and all the configurations and DIT NOTHING WORTHFUL. Well, that's typical me. -.-