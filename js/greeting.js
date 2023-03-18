/*
//    _  _      _ _    
//   | || |__ _| | |___
//   | __ / _` | | / _ \
//   |_||_\__,_|_|_\___/
*/
const today = new Date();
const hour = today.getHours();
const year = today.getFullYear();
const day = today.getDate();
const month = today.getMonth();

const gree1 = 'Geh Schlafen! ';
const gree2 = 'Guten Morgen! ';
const gree3 = 'Schönen Nachmittag! ';
const gree4 = 'Guten Abend! ';

const VALENTINE = '❤️';
const HALLOWEEN = '🎃';
const CHRISTMAS = '🌲🎁';
const NEW_YEAR = ' 🎉';
const special = (month === 1 && day === 14) ? VALENTINE
  : (month === 9 && day === 31) ? HALLOWEEN
  : (month === 11 && day >= 24 && day < 27) ? CHRISTMAS
  : (month === 0 && day < 10) ? year + NEW_YEAR
  : '';
document.getElementById('head').textContent = special;

const greeting =
  hour >= 23 || hour < 5
    ? gree1 + special
    : hour >= 6 && hour < 12
    ? gree2 + special
    : hour >= 12 && hour < 17
    ? gree3 + special
    : gree4 + special;
document.getElementById('title').innerText = greeting;