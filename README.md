# TypeScript React AntDesign CSS Layer Demo

这是一个演示项目，用于展示Ant Design的StyleProvider组件的CSS Layer功能。

## 功能特点

当使用StyleProvider组件时，Ant Design的样式会使用CSS Layer，在产生样式时会把自己的样式放在一个antd的layer中，从而处于低优先级。

而我们自己定义的样式，没有放在任何layer中，所以会处于高优先级，从而覆盖Ant Design的样式。

如果不使用AntD的layer功能，则我们可能需要使用很多hack手段，才能覆盖Ant Design的样式。比如加上`!important`，或者加上一些额外的#id之类。

## 注意事项

Css中提供的@layer功能比较弱，因为它是静态的。必须先声明顺序，然后才是实现，也就是如下：

```css
@layer antd, custom;

@layer antd {
  .ant-select {
    color: red;
  }
}

@layer custom {
    ...
}

@layer custom, antd; // 这样是无效的
```

所以我们在页面上不能自由的定义层顺序，不能用状态来动态调整，作用不太大。算是聊胜于无。

本来对它期望很高，以为可以动态调整，结果发现不行。

## 技术栈

- React 17.0.2
- TypeScript 5.3.3
- Ant Design 5.17.0
- Vite 5.1.4

## 运行方法

1. 安装依赖:
```
pnpm install
```

2. 启动开发服务器:
```
pnpm start
```

服务器启动后会自动在浏览器中打开页面。

## 项目结构

- `src/entry.tsx`: 项目入口文件，配置StyleProvider
- `src/hello.tsx`: 主要组件，是一个Select组件，它里面使用了默认高优先级不易被覆盖的样式。
- `src/styles.css`: 自定义样式，用于演示样式覆盖效果
