
// Find the button and the paragraph in the HTML.
const button = document.querySelector("#change-button");
const catNames = document.querySelector("#cat-names");


// Keep track of whether the cat names are visible.
let showingCats = false;


// This function shows or hides the cat names.
function toggleCatNames() {

    // Check whether the cat names are currently hidden.
    if (showingCats === false) {

        // Reveal the cat names.
        catNames.textContent = "Nami and Robin";

        // Remember that the names are now visible.
        showingCats = true;

    } else {

        // Hide the cat names by clearing the paragraph.
        catNames.textContent = "";

        // Remember that the names are now hidden.
        showingCats = false;
    }
}


// Run the function whenever the button is clicked.
button.addEventListener("click", toggleCatNames);
