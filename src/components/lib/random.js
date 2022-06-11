const randomNumber = () => Math.floor(Math.random() * 100)


const updated = () => {
  option.value.series[0].data.forEach(i => i.value = randomNumber())
}


setInterval(() => {
  updated()
}, 1000)