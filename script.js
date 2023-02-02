var seg=00
var min=00
var  interval


function Iniciar(){
    interval=setInterval(time,10)
}

function Pausar(){
    clearInterval(interval)
}

function Parar(){
    clearInterval(interval)
    seg=00
    min=00
document.getElementById("timer").innerText="00:00"
}

function time(){
    seg++
    if(seg==60){
        min++
        seg=0
    }
    document.getElementById("timer").innerText=(`${min}:${seg}`)
}