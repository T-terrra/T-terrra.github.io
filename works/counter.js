let count=0
let counter=0
const countUp=()=>{
    count++
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: '+ count
}
const countReset=()=>{
    const countElement2 = document.querySelector('#count')
    countElement2.innertext = '回数: '+ counter
}