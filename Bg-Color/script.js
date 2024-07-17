function generateColors(){
    let hex = '0123456789ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomColor = Math.floor(Math.random()*42);
    console.log(randomColor);
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[randomColor];
    }
    console.log(color)
    return color;
}

let body = document.querySelector('body');
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')

let startColors;
const generateRandomColors = () => {
    console.log('START');
    startColors = setInterval(()=>{
        body.style.backgroundColor = generateColors();
    },1000)
}

const stopColor = () =>{
    console.log('STOP')
    clearInterval(startColors);
    startColors = null
}
start.addEventListener('click',generateRandomColors)
stop.addEventListener('click',stopColor);