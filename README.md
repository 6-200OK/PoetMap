# 项目说明文档
### 项目简介
地图是一种科学表达的方式，有着非常悠久的历史，从古代到近现代，地图与科技的融合是渐进而又显著的。出于对中国文化的热爱，我们把古代是人们走过的地方做成了3维地图生动地展示了诗人的足迹，并对各诗人的生平进行了调研，丰富了展示内容。
### 项目技术栈
- 前端：Vue3 + uni-app
- 后台：SpringBoot
- 数据库：Mysql
- 3D可视化地图：Cesium
- 构建工具：vite
### 项目文件树
```
PoetMap
├─ .babelrc
├─ .gitignore
├─ index.html
├─ jsconfig.json
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ src
│  ├─ api
│  │  └─ user.js
│  ├─ App.vue
│  ├─ components
│  │  ├─ cesiumMap.vue
│  │  ├─ poetLife.vue
│  │  ├─ poetLocation.vue
│  │  ├─ searchPoet.vue
│  │  ├─ topBar.vue
│  │  └─ VueTimeline.vue
│  ├─ config
│  │  └─ index.js
│  ├─ graph
│  │  ├─ axis.js
│  │  ├─ cursor.js
│  │  ├─ events.js
│  │  ├─ layout.js
│  │  ├─ timeline.js
│  │  └─ zoom.js
│  ├─ main.js
│  ├─ manifest.json
│  ├─ pages
│  │  └─ index.vue
│  ├─ pages.json
│  ├─ static
│  │  ├─ logo.png
│  │  ├─ models
│  │  │  └─ model.gltf
│  │  └─ topbar.png
│  ├─ stores
│  │  ├─ index.js
│  │  └─ modules
│  │     └─ user.js
│  ├─ uni.scss
│  ├─ ut
│  └─ utils
│     ├─ mapUtils.js
│     └─ request.js
└─ vite.config.js

```
### 项目启动说明
- npm方式启动
npm install 安装项目相关依赖
npm run dev:h5 在web界面运行项目
- yarn方式启动
yarn run dev:h5
### 项目体验地址
### 环境准备
- NodeJS: v16.17.1
- pnpm: v7.12.2

### 项目测试覆盖率

- 单测覆盖率
- 函数覆盖率

### 编码规范

- **ESlint**

### 团队成员

| 团队成员 | 角色 | 职责 |
| :------: | :--: | :--:|
| 李中     | 队长 | 前端地图页面构建、分工安排 |
| 王圆圆 | 项目经理 | 项目整体把控、数据收集、前端页面构建 |
| 李博辉 | 开发人员 | 服务端开发和数据处理 |
| 刘煜 | 开发人员 | 前端框架和查询界面搭建 |
| 闫兴宝 | 产品经理&UI设计 | 产品调研、数据收集、前端页面构建、UI设计 |
| 杜汶珂 | UI设计 | UI设计、数据收集 |


