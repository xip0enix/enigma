function getNews() {
  fetch('https://www.tagesschau.de/api2u/homepage')
  .then(response => response.json())
  .then(data => {
    const newsArray = data.news;
    const newsList = document.getElementById('newsList');

    // Entferne alle vorherigen Elemente der Liste
    while (newsList.firstChild) {
      newsList.removeChild(newsList.firstChild);
    }

    for(let i = 0; i < newsArray.length-1; i++) {
      const newsItem = document.createElement('li');
      const newsLink = document.createElement('a');
      newsLink.href = newsArray[i].shareURL;
      newsLink.textContent = newsArray[i].title;
      newsItem.appendChild(newsLink);
      newsList.appendChild(newsItem);
    }
  })
  .catch(error => {
    console.error('Fehler beim Abrufen der Daten:', error);
  });
}

getNews();
setInterval(getNews, 300000);