/*
//    _  _      _ _    
//   | || |__ _| | |___
//   | __ / _` | | / _ \
//   |_||_\__,_|_|_\___/
*/
function getGreeting(currentDate = new Date()) {
  const hour = currentDate.getHours();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  const specialGreetings = {
    '0-1-0-10': ` ${currentDate.getFullYear()}` + '🎉', // New Year (flexible range)
    '1-14': '❤️', // Valentine's Day
    '9-31': '🎃', // Halloween
    '11-24-11-26': '🌲🎁', // Christmas (inclusive range)
  };

  const special = specialGreetings[`${month}-${day}`] || '';

  const greetings = [
    ['23-4', 'Geh Schlafen! '], // Good Night (flexible range)
    ['5-11', 'Guten Morgen! '],
    ['12-16', 'Schönen Nachmittag! '],
    ['17-22', 'Guten Abend! '],
  ];

  for (const [timeRange, greetingText] of greetings) {
    const [startHour, endHour] = timeRange.split('-');
    if (hour >= startHour && hour < endHour) {
      return greetingText + special;
    }
  }

  // Default greeting if no time-based match is found
  return 'Hallo! ' + special;
}

// Usage
const greetingElement = document.getElementById('title');
greetingElement.innerText = getGreeting();
