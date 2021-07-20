//relógio digital
let digitalElement = document.querySelector('.digital');

//elementos de tempo
let secondsElement = document.querySelector('.p_s');
let minutesElement = document.querySelector('.p_m');
let hoursElement = document.querySelector('.p_h');

function updateClock () {
    let now = new Date(); //classe para manipulação de data, retorna data completa
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //relógio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    //ajuste dos ponteiros
    let secondDeg = ((360/60) * second) - 90;
    let minuteDeg = ((360/60) * minute) - 90;
    let hourDeg = ((360/12) * hour) - 90;

    //rotação dos ponteiros
    secondsElement.style.transform = `rotate(${secondDeg}deg)`;
    minutesElement.style.transform = `rotate(${minuteDeg}deg)`;
    hoursElement.style.transform = `rotate(${hourDeg}deg)`;
}

//mantem o relógio sempra com 2 dígitos
function fixZero (time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();