// Selektiere das Element, in dem die News-Liste gerendert wird
const newsList = document.getElementById('newsList');

// Eine Funktion zum Entfernen aller Child-Nodes eines Parent-Elements
function removeChildNodes(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

// Eine Funktion zum Erstellen eines einzelnen News-Items
function createNewsItem(news) {
  // Erstelle die notwendigen DOM-Elemente
  const newsItem = document.createElement('li');
  const newsLink = document.createElement('a');
  const newsLinkText = document.createElement('span');

  // Setze die Attribute und Inhalte der DOM-Elemente
  newsLink.href = news.shareURL;
  newsLink.appendChild(document.createTextNode(news.title + ' ['));
  newsLink.appendChild(newsLinkText);
  newsLink.appendChild(document.createTextNode(']'));
  newsLink.id = news.crop.headerText;

  newsLinkText.textContent = news.topline;
  
  // Füge CSS-Klassen hinzu, um das Styling zu steuern
  newsLink.classList.add('news-link');

  // Füge das News-Item zum DOM hinzu und gib es zurück
  newsItem.appendChild(newsLink);
  return newsItem;
}

// Eine Funktion zum Rendern aller News-Items
function renderNews(newsArray) {
  // Entferne alle vorherigen News-Items aus der Liste
  removeChildNodes(newsList);

  // Erstelle ein News-Item für jedes Element im Array (bis auf das letzte)
  newsArray.slice(0, -1).forEach(function(news) {
    const newsItem = createNewsItem(news);
    newsList.appendChild(newsItem);
  });
}

// Eine Funktion zum Abrufen der News-Daten und anschließenden Rendern der News-Items
function fetchNews() {
  // Führe einen fetch-Aufruf auf die API-URL durch
  fetch('https://www.tagesschau.de/api2u/homepage')
    .then(response => response.json())
    .then(data => {
      // Extrahiere das News-Array aus der API-Antwort
      const newsArray = data.news;
      // Rendere die News-Items
      renderNews(newsArray);
    })
    .catch(error => {
      console.error('Fehler beim Abrufen der Daten:', error);
    });
}

// Führe die fetchNews-Funktion einmal aus, um die News-Items beim Laden der Seite zu rendern
fetchNews();

// Führe die fetchNews-Funktion alle 5 Minuten erneut aus, um die News-Items regelmäßig zu aktualisieren
setInterval(fetchNews, 300000);
