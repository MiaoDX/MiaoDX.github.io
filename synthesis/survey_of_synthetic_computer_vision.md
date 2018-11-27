---
title: A survey of synthetic computer vision
date: 2017-5-11 20:00:00
tags: 
  - synthesis
  - cv
---

I am going to blog a series of survey posts on synthesis ways to produce datasets for computer vision or virtual environment for DL/RL, the idea first came into my mind when one of my upperclassman (FP,T) told me we can use data produced by simulation software for DL,<!-- more --> and later on I realized that these ***synthesis*** ways are actually feasible when I encounter the works of [openai](https://github.com/openai), especially the [gym](https://github.com/openai/gym) and [universe](https://github.com/openai/universe) projects. And the survey starts when I was doing project for Mrs Liang Wan's `Advanced Computer Graphics` class.

There are (at least) three main fields of the intended survey:

* Physics Simulations, like Bullet, Havok, MuJoCo, ODE and PhysX, etc
* Game Engines, like Unity3D, Unreal, cocos2d-x, godot and so on
* Closed source games with (community) API for developer, like GTA V

The first one can be part of the second one, and for synthesis images the second and third can be more appealing since they provide abundant images of various scenarios.

The potential difficulty is that the lacking of game development experience, especially in the second and third one. But the promising outcome is really appealing and maybe not so much experience in game development is needed at all.

What's more, all of these three have successful prior work, the openai gym uses [MuJoCo](https://github.com/openai/gym#mujoco) in their project, and there is [unrealcv](https://github.com/unrealcv/unrealcv) which aim to help computer vision researchers build virtual worlds using Unreal Engine 4, then there is one article [Using Virtual Worlds, Specifically GTA5, to Learn
Distance to Stop Signs](http://orfe.princeton.edu/~alaink/SmartDrivingCars/DeepLearning/GTAV_TRB_Final.pdf). So I am going to survey these three in the first round.

To make things easy to refer to and organized, all blogs are listed below with logical order:

* [Have a glance at `unrealcv`](../have_a_glance_at_unrealcv)
