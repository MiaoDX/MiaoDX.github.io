---
title: Use mongo in docker and dump database
date: 2016-12-11 17:07:00
categories:
  - [Configuration]
  - [Database]
tags:
  - mongodb
  - docker
  - database
---

## 使用 mongo docker 镜像

使用 mongo 镜像是很方便的，直接使用官方镜像就好了，为了今后更方便使用，这里给出依据 [restheart-docker](https://github.com/SoftInstigate/restheart-docker) 中的 [docker-compose.yml](https://github.com/SoftInstigate/restheart-docker/blob/master/docker-compose.yml) 裁剪出一个还不错的方案（也就是剪除 restheart 部分而已）：

<!-- more -->

``` vi
# vi docker-compose.yml

version: '2'

### Creates a named network with the default bridge driver
networks:
   backend:

### Creates a permanent, named data volume
# This makes much easier to identify where the mongodb data is stored on host
# See: https://docs.docker.com/engine/userguide/containers/dockervolumes/#mount-a-shared-storage-volume-as-a-data-volume
volumes:
   datavolume:

services:
   mongodb:
      image: mongo:3.2
      ### Uncomment to name the container explicitly
      # container_name: your-mongo-name
      volumes:
         - datavolume:/data/db
      networks:
         - backend
      ports:
        - "27017:27017"
```

运行 `docker-compose -f docker-compose.yml up` 后便会成功启动镜像了。上面需要解释的有两个地方，`networks` 与 `volumes` 会在第一次启动后新建一个网络与卷，名字分别为 `<nowpath>_backend` 与 `<nowpath>_datavolume`，假设当前路径为 `testmongo`，则有如下输出（第一次）：

``` vi
Creating network "testmongo_backend" with the default driver
Creating volume "testmongo_datavolume" with default driver
Creating testmongo_mongodb_1
Attaching to testmongo_mongodb_1
mongodb_1  | 2016-12-11T13:15:09.269+0000 I CONTROL  [initandlisten] MongoDB starting : pid=1 port=27017 dbpath=/data/db 64-bit host=4929d787dd14
[...]
```

此时可以查看网络与 volume 信息：`docker network inspect testmongo_backend` 与 ` docker volume inspect testmongo_datavolume`，特别是 `volume inspect` 可以看到存储的挂载点：

``` vi
[
    {
        "Name": "testmongo_datavolume",
        "Driver": "local",
        "Mountpoint": "/var/lib/docker/volumes/testmongo_datavolume/_data",
        "Labels": null,
        "Scope": "local"
    }
]
```

另外，`container_name` 是可配的，在实际使用时最好是进行配置。

## 数据库导出

上面得到的挂载点是存储着 mongo 信息的，但是当我们想到导出当前数据库时这些数据是不可用的（格式不对）。

预计需要用到的指令：[MongoDB 备份(mongodump)与恢复(mongorestore)](http://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html)，[mongodump](https://docs.mongodb.com/manual/reference/program/mongodump/)，[mongoexport](https://docs.mongodb.com/manual/reference/program/mongoexport/)。

在 `docker-compose up` 后，我们在数据表中添加一行记录：

在本地（Linux 主机或虚拟机）安装了 mongo （客户端）之后，运行 `mongo` 命令：

``` vi
MongoDB shell version: 2.6.10
connecting to: test
Server has startup warnings:
[...]
>
```

``` vi
# 新的数据，参考 http://www.runoob.com/mongodb/mongodb-insert.html

> use test
> db.col.insert({title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```


数据表/集合（collection）导出可以直接使用 `mongoexport` 来导出：`mongoexport --db test --collection users --out users.json`

但是对一个数据库的导出是不可用的，`mongodump --db test --out .` 会在当前路径下生成一个空的 `test` 文件夹，而事实上是有一条数据的。这是一个需要解决的问题，在 SO 上有类似的解决方案：[docker-machine ssh command for mongodump](http://stackoverflow.com/a/32675807/7067150)，答案中也有[我的一些注释](http://stackoverflow.com/a/41084525/7067150)，整理一下如下：

想法是新建一个与挂载 volume（这里最好是一个本机路径，容易获取结果）的 mongo container，与当前正在运行的 mongo container 进行连接，执行 `dump` 指令：

``` vi
# vi mongodumpFromDocker.sh
# A nice method to mongodump from Docker container

sudo docker run \
    --net testmongo_backend \
    --link testmongo_mongodb_1:mongo \
    -v $(pwd):/backup mongo:3.2 bash \
    -c 'mongodump --out /backup --host $MONGO_PORT_27017_TCP_ADDR'
```

``` vi
$ chmod +x mongodumpFromDocker.sh
$ ./mongodumpFromDocker.sh
```

这会当前路径下生成正确的包含数据与数据库信息的 `test` 文件夹。上面的 bash 文件中 `testmongo_backend` 是我们上面生成的网络，testmongo_mongodb_1 是因为我们没有指定 container 的名称，`$MONGO_PORT_27017_TCP_ADDR` 需要换为一个真实的 IP 地址，`0.0.0.0` 是不可用的，以我跑在 virtualbox 中的虚拟机为例，最后一行可以改为：

`-c 'mongodump --out /backup --host 100.100.100.10'` 或

`-c 'mongodump --out /backup --host 100.100.100.10:27017'`


## 数据库导入

[mongorestore](https://docs.mongodb.com/manual/reference/program/mongorestore/) 可以很好的工作：

`mongorestore -d test2 test` 会在 mongo container 中新建一个与 `test` 文件夹包含的数据信息相同的数据表（collection） `test2`。

## 总结

1.上面的用法并非是 `production ready` 的，特别是没有设置用户名与密码

2.mongo 的几个数据库/表迁移命令只有 `mongodump` 对 docker 不透明，感觉今后也许会有更新，毕竟我们是可以直接查询到数据内容的，无法一键备份是有些没有道理。


Good Luck & Have Fun!

