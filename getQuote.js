
//**GET QUOTE FUNCTIONALITY**//

//Event Handler getQuote gets called after pressing the wizard hat.

function getQuote() {
  // Generate random number from 1 - 100 as the random page number for the API endpoint URL
  const randomNum = Math.floor((Math.random() * 100) + 1);
  // Generate random number from 0 - 19 as the random index for the API data
  const randomIndex = Math.floor((Math.random() * 20));
  // Set page number in URL
  const endpoint = `https://api.quotable.io/quotes?page=${randomNum}`;

  // Make the API request
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      // Variable initialization
      // Grabs the quote, adds some spacing, then grabs author and glues them together
      let quote = data.results[randomIndex].content + "<br>" + "<br>" + "-" + data.results[randomIndex].author;
      // Grabs the parent div
      let parent = document.getElementById("qBox");
      // Makes p tag
      let make_p = document.createElement("p");

      // Make a P Tag, assign class, inject to parent
      function appendQuote() {
        make_p.classList.add("qTxt");
        make_p.innerHTML = quote;
        parent.appendChild(make_p);
      }

      // Function calls
      // Run clear only when quote is present
      if (parent.children[1]) {
        parent.removeChild(parent.children[1]);
        appendQuote();
      } else {
        appendQuote();
      }
    });
}

// Add event listener that calls the function after pressing the button for 1 second
const button = document.getElementById("conjQuote");
let timer;
button.addEventListener("mousedown", () => {
  timer = setTimeout(() => {
    getQuote();
  }, 1000); // Add 1 second delay before calling getQuote function
});
button.addEventListener("mouseup", () => {
  clearTimeout(timer); //resets timer on mouse up.
});
button.addEventListener("touchstart", getQuote);
