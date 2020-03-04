//how to get clocks to work

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if (secondsDegrees == 90) {
    secondHand.classList.add("no-transition");
  } else {
    secondHand.classList.remove("no-transition");
  }
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  if (minutesDegrees == 90) {
    minuteHand.classList.add("no-transition");
  } else {
    minuteHand.classList.remove("no-transition");
  }
  
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  if (hoursDegrees == 90) {
    hourHand.classList.add("no-transition");
  } else {
    hourHand.classList.remove("no-transition");
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)
.no-transition {
  transition: none;
}

//a bit of CSS here
.hour-hand,
.min-hand {
  background: black;
}
.second-hand {
  background: red;
}
//end of getting clocks to work
