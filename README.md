# Vue-QRCode-Directive
<a href="https://www.npmjs.com/package/vue-qrcode-directive"><img src="https://img.shields.io/npm/v/vue-qrcode-directive.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-qrcode-directive"><img src="https://img.shields.io/npm/l/vue-qrcode-directive.svg" alt="License"></a>
<a href="https://npmcharts.com/compare/vue-qrcode-directive?minimal=true"><img src="https://img.shields.io/npm/dm/vue-qrcode-directive.svg" alt="Downloads"></a>

> 一种使用Vue指令去解析二维码的插件。( A plug-in that uses the Vue instruction to parse qr codes. )

# 使用 ( Use )

## 安装 ( Install )

```sh
npm install vue-qrcode-directive --save
or
yarn add vue-qrcode-directive
```

## 在main.js中注册 ( Register in main.js )

```js
import qrcode from 'vue-qrcode-directive'
Vue.use(qrcode)
```


## 在元素上使用v-qr指令 ( Use the v-qr instruction on the label )
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

## options参数配置 ( Parameter configuration )

### 1.简易配置 ( 1.Easy configuration )

```js
options: '我是二维码的内容'
```
即直接提供二维码的数据即可

### 2.以对象的形式提供 ( 2.Available as an object )
```js
options: {
  text: `我是二维码的内容(I'm the content of the QR code.)'`,
  render: "canvas",
  width: 256,
  height: 256,
  typeNumber: -1,
  correctLevel: 2,
  background: "#ffffff",
  foreground: "#000000"
}
```

| 参数(params)                   | 含义(meaning)                          | 默认值(default)        |
| --------------------- | ----------------------------- | ------------- |
| `text`                | 二维码中的内容                  | NA           |
| `render`              | 渲染的方式，canvas或者table     | canvas       |
| `width`               | 二维码的宽度                   | 256           |
| `height`              | 二维码的高度                   | 256           |
| `correctLevel`        | 校正级                        | 2             |
| `typeNumber`          | 类型码                        | -1            |
| `background`          | 背景色                        | #ffffff       |
| `foreground`          | 前景色                        | #000000       |

## qrcode核心解析器来源 ( Core Parser Source )

> 来自jeromeetienne的jquery-qrcode中的qrcode.js ( Qrcode.js from Jquery-qrcode from Jeromeetienne )

==> [点击前往(Go to) jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)

因此options的配置保持跟jquery-qrcode中的一样，可以自行前往查看。( So options are configured to stay the same as in jquery-qrcode, and you can go to check it yourself. )
