import QRCode from './src/lib/qrcode'
import { QRErrorCorrectLevel } from './src/lib/qrcode'

const generateQrCode = (options) => {
  // if options is string, 
  if( typeof options === 'string' ){
    options	= { text: options };
  }

  // set default values
  // typeNumber < 1 for automatic calculation
  options	= Object.assign( {}, {
    render: "canvas",
    width: 256,
    height: 256,
    typeNumber: -1,
    correctLevel: QRErrorCorrectLevel.H,
    background: "#ffffff",
    foreground: "#000000"
  }, options)

  
  const createCanvas = () => {
    // create the qrcode itself
    const qrcode	= new QRCode(options.typeNumber, options.correctLevel)
    qrcode.addData(options.text)
    qrcode.make()

    // create canvas element
    const canvas	= document.createElement('canvas')
    canvas.width	= options.width
    canvas.height	= options.height
    const ctx		= canvas.getContext('2d')

    // compute tileW/tileH based on options.width/options.height
    const tileW	= options.width  / qrcode.getModuleCount()
    const tileH	= options.height / qrcode.getModuleCount()

    // draw in the canvas
    for( let row = 0; row < qrcode.getModuleCount(); row++ ){
      for( let col = 0; col < qrcode.getModuleCount(); col++ ){
        ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background
        var w = (Math.ceil((col+1)*tileW) - Math.floor(col*tileW))
        var h = (Math.ceil((row+1)*tileH) - Math.floor(row*tileH))
        ctx.fillRect(Math.round(col*tileW), Math.round(row*tileH), w, h)
      }	
    }
    // return just built canvas
    return canvas;
  }

  const createTable = () => {
    // 创建qrcode解析器
    const qrcode	= new QRCode(options.typeNumber, options.correctLevel);
    qrcode.addData(options.text);
    qrcode.make();

    // 创建table元素
    const $table = document.createElement('table')
    $table.style.cssText = `width: ${options.width}px; height: ${options.height}px; border: 0px; border-collapse: collapse; background-color: ${options.background}`

    const tileW	= options.width / qrcode.getModuleCount();
    const tileH	= options.height / qrcode.getModuleCount();

    // 绘制在表格中
    for(let row = 0; row < qrcode.getModuleCount(); row++ ){

      const $row = document.createElement('tr')
      $row.style.cssText = `height: ${tileH}px;`
      $table.appendChild($row)

      for(let col = 0; col < qrcode.getModuleCount(); col++ ){
        const td = document.createElement('td')
        td.style.cssText = `width: ${tileW}px; background-color: ${qrcode.isDark(row, col) ? options.foreground : options.background}`
        $row.appendChild(td)
      }
    }
    
    // 返回表格
    return $table;
  }

  const element	= options.render == "canvas" ? createCanvas() : createTable()

  return element
}

export default {
  install(Vue){
    Vue.directive('qr', {
      inserted: function(el, binding){
        el.appendChild(generateQrCode(binding.value))
      }
    })
  }
}

export {
  generateQrCode
}