//**LEAVE NOTES FUNCTIONALITY**//

const leaveNote = () => {
    //initialize variables
    let notes = document.getElementById("noteTxt").value;
    let parent = document.getElementById("parent");
    let make_div = document.createElement("div");

     //Alert if textarea is blank
    if (notes === "") {
        alert("text cannot be blank, please write a message before submitting")
     }
    else {
        // Make a Div and give it a class of "box"
        make_div.classList.add("box");
      
        //Set innher HTML of Div to notes
        make_div.innerHTML = notes;
        parent.appendChild(make_div);
        //Clears textarea after submitting
        document.getElementById("noteTxt").value = "";
     }

    

}

const clearNote = () => {
    let parent = document.getElementById("parent");
    parent.innerHTML = "";

}
