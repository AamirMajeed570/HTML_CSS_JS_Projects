const arr = ['aamir', 'faisal', 'hanan', 'mudasir']
let changeVal = document.getElementById('hello')

let currentIndex = 0

function changeValue () {
  changeVal.innerHTML = arr[currentIndex]
  currentIndex = (currentIndex + 1) % arr.length
}
changeVal.onclick = changeValue
