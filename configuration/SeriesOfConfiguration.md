---
title: Story of Configuration
date: 2017-5-10 18:32:00
tags: 
  - configuration
  - story
---

It all starts when I was very very young, my mother bought me rattle-drum and when I got home I immediately cracked open it to see how it actually make a sound. 
<!-- more -->
Or even before that, when I use screwdriver to open the electric sewing machine and got electric shock. Sometimes I even wonder maybe it's better for me to study engineer instead of software engineer in college. -.-

From spending days to download visual studio 2012 in low speed Internet connection in library when I was freshman to making self-build host on DigitalOcean, from applying for [SuperVessel](https://ptopenlab.com/cloudlabconsole/#/) to hosting class project on Aliyun, from [building OpenCV2 and OpenCV3 with python2 and python3 on windows](https://miaodx.github.io/2017/02/26/blogs/opencv/How_to_install_opencv_in_WINDOWS/) and recently [taking some like two weeks to build a program](https://github.com/MiaoDX/hand_in_homework/blob/master/Software_Testing/angelix.md). The amount of time spending on these configurations really is countless.

A pretty shamed thing to admit is that, most of my configurations lead to nothing, after days and nights' **~~hardwork~~**, I just never look at these things after finishing configuring them.

So, why is this blog? I just want to remind myself that:

>Time you enjoy wasting is not wasted

>--  Marthe Troly-Curtin [Ref](http://quoteinvestigator.com/2010/06/11/time-you-enjoy/)

Even sometimes I really dislike the despair when tried once and once again, things just won't behave as wish.

And from today on, I will try to record some of these really time consuming configuration stuff and try to do a `Lesson Learned` at the end of these writeup and in this blog. These won't necessarily be a blog, maybe just some files in some github repositories.


Hopefully, this ***configuration for configuration*** can really last.


### [Building angelix](https://github.com/MiaoDX/hand_in_homework/blob/master/Software_Testing/angelix.md). 

[`Angleix`](https://github.com/mechtaev/angelix) is an semantics-based automated program repair tool for C programs, I choose to ingest it for my project of graduate software testing class.

This program uses lots of other projects to perform the backend computing jobs, such as `klee`. The problem is that it use some codebases of the `master` branch and these code finally cause dependences problems and made my build failed in many ways.

So, if we are going to publish codebase with using lots of other modules, just `FREEZE` the versions like in many code management tools. This can be hard when multiple languages are involved, like in angelix, but we should try our best to make things easier for both our potential users and our future self.

