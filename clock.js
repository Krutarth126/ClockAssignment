let clock = ()=>{
    let My= new Date();
    let time= My.toLocaleTimeString()
    let date= My.toLocaleDateString()
    document.querySelector("#time").innerHTML= `<p>${time}</p><p>${date}</p>`;
}
let curTime= setInterval(clock, 1000);
let stop;
stop=()=>{
    clearInterval(curTime);
}

let start;
start=()=>{
    setInterval(clock,1000);
}


document.querySelector("#Btn1").addEventListener("click", stop);
document.querySelector("#Btn2").addEventListener("click", start);

