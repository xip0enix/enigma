const api = 'https://type.fit/api/quotes';
function getQuote(){
    fetch(api)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const length = data.length;
    const randomNumber = Math.floor(Math.random() * length) + 1;
    const author = 
        data[randomNumber].author == null
        ? 'unknown'
        : data[randomNumber].author;
    
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = data[randomNumber].text + ' [' + author + ']'; 
  });
}
getQuote();



 