const potato = document.createElement('div');
let jumper = 0;
let direction = "right";
let screenWidth = document.documentElement.clientWidth - 80;
let globalID;

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');


potato.textContent = '🥔';
potato.style.cssText = `cursor: pointer; position: absolute; top: 40px; left: 8px; height: 70px; width: 70px; font-size: 70px;`;
document.querySelector('body').append(potato);

const movePotato = () => {
  potato.style.transform = `rotate(${jumper}deg)`;
  potato.style.left = jumper + 'px';

  switch (direction) {
    case 'right':
      jumper += 5;
      if (jumper >= screenWidth) direction = "left";
      break;

    case 'left':
      jumper -= 5;
      if (jumper < 0) direction = "right";
  }

  globalID = requestAnimationFrame(movePotato);
};

movePotato();

stopBtn.addEventListener('click', () => {
  cancelAnimationFrame(globalID);
});

startBtn.addEventListener('click', () => {
  if (globalID) cancelAnimationFrame(globalID);
  movePotato();
});

resetBtn.addEventListener('click', () => {
  cancelAnimationFrame(globalID);
  jumper = 0;
  potato.style.left = '8px';
  direction = "right";
});
