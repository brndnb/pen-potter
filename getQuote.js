//**GET QUOTE FUNCTIONALITY**//

//Event Handler getQuote gets called after pressing the wizard hat.
document.getElementById("conjQuote").addEventListener("click", getQuote);



function getQuote() {
    //Generate Random Number from 1 - 100
    const randomNum = Math.floor( (Math.random() * 100) + 1);

    //set page number in URL
    const endpoint = `https://api.quotable.io/quotes?page=${randomNum}`

    //make the API request 
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {

        //**Variable Initialization**//
        //grabs the quote, adds some spacing,then grabs author and glues them together
        let quote = data.results[0].content + "<br>" + "<br>" + "-" + data.results[0].author;
        //grabs the parent div
        let parent = document.getElementById("qBox");
        //makes p tag 
        let make_p = document.createElement("p");
        
        //Make a P Tag, assign class, inject to parent
        function appendQuote() {
            make_p.classList.add("qTxt");
            make_p.innerHTML = quote;
            parent.appendChild(make_p);
    }
    //Function Calls.. 
    //Run clear only when quote is present.
    if(parent.children[1]) {
        parent.removeChild(parent.children[1])
        appendQuote();
        }
    else {
        appendQuote();
    }
    
    }
        



    )

}



