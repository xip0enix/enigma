/*
//     ___                       
//    / __|___ _ _ ___ _ _  __ _ 
//   | (__/ _ \ '_/ _ \ ' \/ _` |
//    \___\___/_| \___/_||_\__,_|
*/
const api_url = 'https://api.corona-zahlen.org/germany';

if (width > 1101)
{
  async function getCoronaData() {
  const { delta, weekIncidence } = await (await fetch(api_url)).json();
  return { delta, weekIncidence };
}

async function getCorona() {
  const { delta, weekIncidence } = await getCoronaData();
  const neuInfektionen = delta.cases;
  const inzidenz = Math.ceil(weekIncidence);
  const tode = delta.deaths;
  console.log('Data loaded');

  const neuInfektionenElement = document.getElementById("neuInfektionen");
  const inzidenzElement = document.getElementById("7tage");
  const todeElement = document.getElementById("neuTode");

  neuInfektionenElement.innerHTML ='Neuinfektionen: +' + neuInfektionen;
  inzidenzElement.innerHTML = '7-Tage-Inzidenz: ' + inzidenz;
  todeElement.innerHTML = 'Todesfälle: +' + tode;
}

getCorona();

// Fetch data again after a certain time interval
setInterval(getCorona, 60000); // fetch data every 60 seconds
}
