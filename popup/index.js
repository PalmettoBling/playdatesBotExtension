onload = function() {
    //let imgUrl = "https://api.pexels.com/v1/search?query=mushroom";
    let imgUrl = "https://api.pexels.com/v1/curated?per_page=80";
    let headers = new Headers();
    headers.append('Authorization', '563492ad6f91700001000001cc1cd64239cd4be3af683a437fcceea2');
    let backgroundimg = fetch(imgUrl, {
        method: "GET",
        headers: headers
    }).then(photos => photos.json())
        .then(photos => {
            console.log(photos);
            let imageNumber = Math.floor(Math.random() * 81);
            const photo = photos.photos[imageNumber];
            //const photo = photos.photos[0];
            document.body.style.backgroundImage = "url('" + photo.src.large + "')";
            document.body.style.background = "rgba(0, 0, 0, 0.8);"
            document.body.style.opacity = "0.7;"
    });

    newquote();
    
    this.document.querySelector("#newquote").onclick = function(e) {
        e.preventDefault();
        newquote();   
    }
}

function newquote() {
    const randomQuoteUrl = "https://www.xboxplaydates.us/playdatesQuotes/randomquote";
    let response = fetch(randomQuoteUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.game === "") {
                data.game = "Unkonwn";
            }
            document.getElementById('quotenumber').innerHTML = "#" + data.id;
            document.getElementById('quotetext').innerHTML = data.quote + " - " + data.attribution;
            document.getElementById('quotedata').innerHTML = data.game + " - " + data.dateOfQuote;
        }).catch(error => {
            alert("HTTP-Error: " + error);
        });
}
