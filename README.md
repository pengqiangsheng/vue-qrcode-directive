# Vue-QRCode-Directive

> 一种使用Vue指令去解析二维码的插件

# 使用

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



