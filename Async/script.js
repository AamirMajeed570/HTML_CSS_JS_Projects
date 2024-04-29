let randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
let intervalId; 
function startChangingColor () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
  }
  function changeBgColor () {
    document.body.style.backgroundColor = randomColor()
  }
}
function stopChangingColor () {
  clearInterval(intervalId)
  intervalId = null //Optemized Code
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
console.log(randomColor())
