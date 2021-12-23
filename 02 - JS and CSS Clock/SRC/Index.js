const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');

function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const seconds = now.getSeconds();
    const secondsDegrees = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${getSeconds}deg)`
}

setInterval(setTime, 1000)

setTime();