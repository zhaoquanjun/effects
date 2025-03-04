var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
canvas.width = screen.availWidth
canvas.height = screen.availHeight
var arr = Array(Math.ceil(screen.availWidth / 10)).fill(0)
var strArr = 'ZXBZSY01020203'.split('')
var rain = function () {
  ctx.fillStyle = 'rgba(0, 0, 0, .05)'
  ctx.fillRect(0, 0, screen.availWidth, screen.availHeight)
  ctx.fillStyle = '#0f0'
  arr.forEach(function (vk, index) {
    ctx.fillText(strArr[Math.floor(Math.random() * strArr.length)], 10 * index, vk + 10)
    arr[index] = vk > canvas.height || vk > 14000 * Math.random() ? 0 : vk + 10
  })
}
setInterval(rain, 40)
