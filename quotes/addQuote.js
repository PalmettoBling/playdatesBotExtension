onload = function() {
    this.document.body.style.backgroundImage = "url(blank-sheet.jpg";
    document.body.style.background = "rgba(0, 0, 0, 0.8);"
    document.body.style.opacity = "0.7;"
    document.querySelector('#quoteform').onsubmit = function(e) {
        e.preventDefault();
        var quotetext = document.forms["quoteform"]["quotetext"];
        var quoteattribution = document.forms["quoteform"]["quoteattribution"]
        var quotegame = document.forms["quoteform"]["quotegame"];
        var quotedate = document.forms["quoteform"]["quotedate"];
        var quotesubmitter = document.forms["quoteform"]["quotesubmitter"];
    
        let addQuoteUrl = "https://www.xboxplaydates.us/api/addquote";
        let response = fetch(addQuoteUrl, {
            method: "POST", 
            body: JSON.stringify({
                "quotetext": quotetext.value,
                "quoteattribution": quoteattribution.value,
                "quotegame": quotegame.value,
                "quotedate": quotedate.value,
                "quoteauthor": quotesubmitter.value
            }),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(response => {
            console.log("Response: " + response);
            this.reset();
            this.innerHTML += "<h3>Quote has been submitted for review.</h3>";
        });    
    }
}
