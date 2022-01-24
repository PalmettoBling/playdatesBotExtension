const randomQuoteUrl = "https://www.xboxplaydates.us/playdatesQuotes/randomquote";
let response = fetch(randomQuoteUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('quotenumber').innerHTML = "#" + data.id;
        document.getElementById('quotetext').innerHTML = data.quote + " - " + data.attribution;
        document.getElementById('quotedata').innerHTML = data.game + " - " + data.dateOfQuote;
    }).catch(error => {
        alert("HTTP-Error: " + error);
    });
