let count=0
const countUp=()=>{
    count++
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: '+ count
}
const countReset=()=>{
    count=0
    const countElement2 = document.querySelector('#count')
    countElement2.innertext = '回数: ' + count
}