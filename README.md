# Vue-QRCode-Directive
<a href="https://www.npmjs.com/package/vue-qrcode-directive"><img src="https://img.shields.io/npm/v/vue-qrcode-directive.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-qrcode-directive"><img src="https://img.shields.io/npm/l/vue-qrcode-directive.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/vue-qrcode-directive"><img src="https://img.shields.io/david/dev/binaryify/vue-qrcode-directive.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/vue-qrcode-directive"><img src="https://img.shields.io/david/binaryify/vue-qrcode-directive.svg" alt="devDependencies" ></a>

> 一种使用Vue指令去解析二维码的插件

# 使用

## 安装

```sh
npm install vue-qrcode-directive --save
or
yarn add vue-qrcode-directive
```

## 在main.js中注册

```js
import qrcode from 'vue-qrcode-directive'
Vue.use(qrcode)
```


## 在元素上使用v-qr指令
```js
<template>	
  <div v-qr="options" v-if="options" />
</template>
<script>
export default {
  data() {
    return {
      options: 'www.baidu.com'
    }
  }
}
</script>
```

## options参数配置

### 简易配置

```js
options: '我是二维码的内容'
```
即直接提供二维码的数据即可

### 以对象的形式提供
```js
options: {
  text: '我是二维码的内容',
  render: "canvas",
  width: 256,
  height: 256,
  typeNumber: -1,
  correctLevel: 2,
  background: "#ffffff",
  foreground: "#000000"
}
```

| 参数                   | 含义                          | 默认值        |
| --------------------- | ----------------------------- | ------------- |
| `text`                | 二维码中的内容                  | NA           |
| `render`              | 渲染的方式，canvas或者table     | canvas       |
| `width`               | 二维码的宽度                   | 256           |
| `height`              | 二维码的高度                   | 256           |
| `correctLevel`        | 校正级                        | 2             |
| `typeNumber`          | 类型码                        | -1            |
| `background`          | 背景色                        | #ffffff       |
| `foreground`          | 前景色                        | #000000       |

## qrcode核心解析器来源

> 来自jeromeetienne的jquery-qrcode中的qrcode.js

==> [点击前往 jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)

所以options的配置保持跟jquery-qrcode中的一样，可以自行前往查看。
