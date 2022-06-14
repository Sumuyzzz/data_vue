const randomNumber = () => Math.round(Math.random() * 100)


const updated = () => {
  option.value.series[0].data.forEach(i => i.value = randomNumber())
}


setInterval(() => {
  updated()
}, 1000)


const getRandomColor = function () {
  return '#' + (function (color) {
    return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
      && (color.length == 6) ? color : arguments.callee(color);
  })('');
} 

export {randomNumber,getRandomColor}