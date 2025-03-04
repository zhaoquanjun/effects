
const canvas:HTMLCanvasElement = document.querySelector('canvas')!
const ctx = canvas.getContext('2d')!
canvas.width = screen.availWidth
canvas.height = screen.availHeight

const arr:number[] = Array(Math.ceil(screen.availWidth / 10)).fill(0)

const strArr:string[] = 'ZXBZSY01020203'.split('')

const rain = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, .05)'
  ctx.fillRect(0, 0, screen.availWidth, screen.availHeight)
  ctx.fillStyle = '#0f0'
  arr.forEach((vk, index) => {
    console.log(vk)
    ctx.fillText(strArr[Math.floor(Math.random() * strArr.length)], 10 * index, vk + 10)
    arr[index] = vk > canvas.height || vk > 14000 * Math.random() ? 0 : vk + 10
  })
}

setInterval(rain, 40)