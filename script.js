const quotes = [
    {
      content: "You are the sun, and I'm the moon. In your shadow I can shine.",
      author: "Tokio Hotel"
    },
    {
      content: "Peace does not include a vendetta; there will be neither winners nor losers.",
      author: "Ahmed Ben Bella"
    },
    {
      content: "Li 9ra,9ra bekrii.",
      author: "Me lilet ra3d"
    },
    {
      content: "I was born with this talent, so I've just worked hard, and now it's gone well for me. But I'm not going to lie - I didn't expect to be top of the Premier League.",
      author: "Riyad Mahrez"
    }
  ];
  
  var currentQuoteIndex = 0;
  
  function generateQuote() {
    var quoteContent = document.getElementById('quote-content');
    var quoteAuthor = document.getElementById('quote-author');
    
    if (currentQuoteIndex >= quotes.length) {
      currentQuoteIndex = 0;
    }
    
    var quote = quotes[currentQuoteIndex];
    quoteContent.textContent = quote.content;
    quoteAuthor.textContent = quote.author;
    
    currentQuoteIndex++;
  }
   
  function markAsFavorite() {
var quoteContent = document.getElementById('quote-content');
var quoteAuthor = document.getElementById('quote-author');
var favoriteQuotesList = document.getElementById('favorite-quotes-list');

if (quoteContent.textContent !== "" && quoteAuthor.textContent !== "") {
  var favoriteQuote = quoteContent.textContent + ' - ' + quoteAuthor.textContent;
  
  // Check if the quote is already in the favorite quotes list
  var existingQuotes = favoriteQuotesList.getElementsByTagName('li');
  var isQuoteAlreadyFavorite = false;
  
  for (var i = 0; i < existingQuotes.length; i++) {
    if (existingQuotes[i].textContent === favoriteQuote) {
      isQuoteAlreadyFavorite = true;
      break;
    }
  }
  
  if (!isQuoteAlreadyFavorite) {
    var listItem = document.createElement('li');
    listItem.textContent = favoriteQuote;
  
    favoriteQuotesList.appendChild(listItem);
  }
}
}