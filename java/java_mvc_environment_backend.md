---
title: Java MVC environment backend
date: 2016-09-17 18:18:00
categories:
  - [Configuration]
tags: 
  - Java 
  - docker 
  - jenkins
---

项目环境搭建 -- 后端

主要内容：Intellij+SpringMVC+Docker_tomcat+Jenkins_CI

<!-- more -->


=== update 20160915，今天一晚上耗在了这上面，原本是在新的台式机上插件安装明显是有问题（插件查询页面全都没有反应），后来在虚拟机上安装 docker 镜像直接显示“This Jenkins instance appears to be offline. ”，以为是虚拟机联网有问题（但 ping 百度是正常的），在 aliyun 的主机上安装也是同样的错误，然后在本地卸载后重新安装竟然也显示 offline 了。然后才惊觉也许是联网有问题？？打开 vpn 后发现真的是可以安装插件了，这种问题耗费时间确实不该啊。（上次在笔记本上配置时很正常，也许是当初开着 vpn 的，要么就是这一段时间之内 GFW 把 Jenkins 的插件网站给封了？？）

另按照建议安装插件后，请单独再安装 “Deploy to container Plugin” 以及 “Maven Integration plugin”。



## 声明

这节博客有些“碎碎念”，主要是今晚不准备写新的程序，如果想要节省时间，请直接参考下面的三/四篇文章：

[使用IntelliJ IDEA开发SpringMVC网站（一）开发环境](http://my.oschina.net/gaussik/blog/385697)

[Docker自动部署Apache Tomcat](http://www.open-open.com/lib/view/open1428473806229.html)，文末有原文链接。

[jenkins+maven+svn构建项目，及远程部署war包到tomcat上](http://www.cnblogs.com/Iqiaoxun/p/5350589.html)

比第三篇更详细一些的：

[「Jenkins+Git+Maven+Shell+Tomcat持续集成」经典教程](https://segmentfault.com/a/1190000002895521)

非常感谢原作者们。


## 缘由

本项目（可看做[原要求](http://www.cnblogs.com/xinz/p/3803035.html)的一种形式，即以小组形式完成），简单地说，以小组方式完成一个“小学生四则运算程序”，题目来源于[邹欣的构建之法](https://book.douban.com/subject/25965995/?qq-pf-to=pcqq.discussion) 中 1.1 节程序员阿超与学校老师的故事（莫名地想到了渔夫与金鱼），使用 Java Web 来做乍看起来可以说是有些“太重了”，但要做到整个小组都参与进来，并没有其他特别好的方法（如果有的话，请告诉我 :>）。

当然，因为需求有变化的可能，所以使用较为成熟的技术还是有更多保障的。

另外，组员们都没有正式做过类似的项目，而今年另一门课程“软件开发基础”也会讲到 Java 开发（Design Patterns 等），可以说使用 Java 开发算是一举多得。

如此可以将整个项目分为前端与后端两部分，本文记录一下后端的环境搭建。

## 真正的缘由

本科学 Java 时因为受到类似于 Java “执行慢”、“笨重”、“有重大设计缺陷”等等说法的误导以及在课上没有跟上老师飞快的讲授节奏还有自己的懒惰，所以学得很不好。可是后来发现其实现实中 Java 能做的东西是非常多的，所谓执行效率，就目前的硬件来说，除非在特定领域（图像、视频处理，硬件控制，高时序要求等）并不会那么明显。其他的诸多好处就不再赘述。

## 开发环境

[Intellij](https://www.jetbrains.com/idea/) 是目前最好的 Java 开发环境（如有异议，请把它当作“PHP 是最好的编程语言”）

[Spring](http://projects.spring.io/spring-framework/)：

>The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. 

算是目前业界正在广泛使用的框架，当然，还是应该有数据持久化框架的，不过这个先不介绍（Hibernate 与 Mybatis 还没确定使用哪个）。

请移步 [使用 IntelliJ IDEA 开发 SpringMVC 网站（一）开发环境](http://my.oschina.net/gaussik/blog/385697)，建议一步步看下去，非常好。

... ... ...  >>> <<< >>>

大概需要半个多小时对应着搞完。


其实开发环境的配置就结束了 ~

当然，在后面你可能需要[一台机器上启动多个 Tomcat](http://www.cnblogs.com/skyme/archive/2011/08/29/2157378.html)，由于原博客有迁移的迹象，现复制如下。

>如果需要在一台机子上启动多个Tomcat服务器，在默认设置下肯定会发生端口冲突。为实现这个效果，只需修改conf子目录中的server.xml文件即可。共需修改三处：
```
(1).修改http访问端口（默认为8080端口）:
<Connector port=”8080” protocol=”HTTP/1.1″ 
connectionTimeout=”20000″ 
redirectPort=”8443″ URIEncoding=”gb2312″/>
(2).修改Shutdown端口（默认为8005端口）:
<Server port=”8005” shutdown=”SHUTDOWN”>
(3).修改JVM启动端口（默认为8009端口）:
<Connector port=”8009” protocol=”AJP/1.3″ redirectPort=”8443″ /> 
```

然后，也许还需要看一下 intellij 热部署的方式，这里不再给出链接。

## 部署

从很久之前就非常、非常、非常讨厌重装系统，进行各种配置没有太大问题，但时隔一年半载再次配置就无法忍受了。所以，对虚拟化一直很感兴趣，装过无数虚拟机。在看到 docker 后无比兴奋，目前的想法是如何把每个 windows 程序做成类似于此，不再为重装或迁移系统而费脑筋（打包软件 [Cameyo](http://www.cameyo.com/) 并不好用）。

与上面类似，还是推荐一篇文章：

[Docker自动部署Apache Tomcat](http://www.open-open.com/lib/view/open1428473806229.html)

写的非常好，不过我还是要进行一些更新。

本人使用的是 tomcat8.

1.tomcat-users.xml 中
``` vi
<role rolename="manager-gui"/>
<role rolename="manager-gui"/>
```

很明显是重复的，根据原文件（tomcat 解压后的 tomcat-users.xml）的说明以及在不进行配置尝试在网页页面进入“Manager App”按钮，并选择取消，会发现有建议的更改方式，具体如下：

``` vi
<?xml version='1.0' encoding='utf-8'?>
<tomcat-users>

<role rolename="manager-gui"/> 
<role rolename="manager-script"/>
<role rolename="manager-jmx"/>   
<role rolename="manager-status"/>


<user username="yourusername" password="yourpassword" roles="manager-gui,manager-script,manager-jmx,manager-status"/>    

</tomcat-users>
```

2.原 Dockerfile 中 `ADD settings.xml /usr/local/tomcat/conf/` 并不太清楚是为何，所以，不再添加。

3.想要远程部署，需要[添加 manager.xml 到指定目录](http://stackoverflow.com/questions/36703856/access-tomcat-manager-app-from-different-host)，反映到 Dockerfile 就是添加：

`ADD manager.xml /usr/local/tomcat/conf/Catalina/localhost/`

具体的，可以参见[我写好的一个 dockerfile](https://coding.net/u/miaodx/p/msec2016_docker/git)。

## 远程部署与持续集成

Tomcat 按前面 docker 容器构建即可。

想要持续集成与远程部署，这里选择 [Jenkins](https://jenkins.io/index.html)，因为 VPS 有限，所以部署在本地（官方提供了 docker）。


参见教程：

[jenkins+maven+svn构建项目，及远程部署war包到tomcat上](http://www.cnblogs.com/Iqiaoxun/p/5350589.html)

以及

[「Jenkins+Git+Maven+Shell+Tomcat持续集成」经典教程](https://segmentfault.com/a/1190000002895521)。

事实证明很爽，毕竟是只需将代码提交到 github 便可以自动编译部署。我的一个 [demo](https://github.com/MiaoDX/msec2016_demo)。

## 使用 jenkins docker 镜像的一些说明  [Update 20160916]

对于 docker 镜像（这里特指 jenkins:2.7.4-alpine，其余的应该都是差不多，毕竟诸多构建工具的版本那么多，不会给定死的），还需要选择安装 maven（[官方的镜像](https://hub.docker.com/_/jenkins/)中安装了 git 以及 openjdk，但是 Maven、Gradle、Ant 均未安装），其实“安装”很简单，我们只是提供一个“名字”罢了，以安装 Maven 为例：
>（主页面）系统管理 -> Global Tool Configuration -> Maven 安装 -> 新增 Maven 

会看到 “Name” 栏为空，我们只需给出一个名字即可，比如说 “mvn3.3.9”（此时 Apache 提供的是 3.3.9 版本），下面的自动安装的来源看着选即可。

但是，这样还不行，会发现源代码更新后出现：
>ERROR: Failed to parse POMs
java.io.IOException: Cannot run program "/bin/java" (in directory "/var/jenkins_home/workspace/***"): error=2, No such file or directory

直接 `sudo docker run -it jenkins:2.7.4-alpine /bin/sh` 进去后执行 `/bin/java` 出现 `/bin/sh: /bin/java: not found`，所以还需要对 java 进行配置。仍旧是上面修改 maven 的页面，把 JDK 对应的 `JAVA_HOME` 改为 `/usr/lib/jvm/java-1.8-openjdk`（见 openjdk:8-jdk-alpine）内的设置。

总结一下，**使用 Jenkins 总归是要配置 JDK，Maven，Git 等的**，不管是在本地还是 Docker 上。

## Deploy war/ear to a container 的小技巧

其中有一个要填的内容 `Context path`，假如说在本地运行时（Intellij）的 url 为 `http://localhost:9000/youareawesome` 那么在 `Context path` 填任何非空的东西，比如说 `aa` 或者 `\aa` 那么在调用时只能是 `http://yourRemoteIp:9000/aa/youareawesome` 会注意到在 url 中生硬的多出了 `aa`，那么什么都不填呢？会发现 `aa` 得换成你的工程名才能访问，比如说你和我一样使用的上面说到的 webapp 的模板，那么得访问 `http://yourRemoteIp:9000/webapp/youareawesome` 才好。这些我们都不喜欢，其实只要填入 `\` 即可，想必这也容易理解。