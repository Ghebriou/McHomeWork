// a table to store the quotes (content & author).
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
  
  //it's an index for the quotes table ( starting from zero ).
  var currentQuoteIndex = 0;
  
  //it's a function used to generate a quote in our webpage when the user click on Generate Quote btn.
  function generateQuote() {
    var quoteContent = document.getElementById('quote-content');
    var quoteAuthor = document.getElementById('quote-author');
    
    //turn the quote index to zero if it's bigger than the size of quotes table.
    if (currentQuoteIndex >= quotes.length) {
      currentQuoteIndex = 0;
    }
    //declare a quote var and initialise it to an element of qoutes table by an index.
    var quote = quotes[currentQuoteIndex];
    quoteContent.textContent = quote.content; 
    quoteAuthor.textContent = quote.author;
    
    currentQuoteIndex++; //increment the index on each time.
  }
   // a function to mark a quote into your favorite list.
  function markAsFavorite() {
    var quoteContent = document.getElementById('quote-content');
    var quoteAuthor = document.getElementById('quote-author');
    var favoriteQuotesList = document.getElementById('favorite-quotes-list');
    //check if the user has already generated a quote,if it's empty nothing will happen
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
    // add the quote to ur FV list if it doesn't exists 
    if (!isQuoteAlreadyFavorite) {
     var listItem = document.createElement('li'); //create a list item to add it to ur list.
     listItem.textContent = favoriteQuote;
     favoriteQuotesList.appendChild(listItem);
    }
  }
  }