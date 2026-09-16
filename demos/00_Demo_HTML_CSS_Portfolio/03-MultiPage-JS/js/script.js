// Wait until the HTML page has loaded.
document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Dark Mode
    // -----------------------------

    const themeButton = document.getElementById("theme-toggle");

    // Check if the visitor previously selected dark mode.
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Light Mode";
    }

    // Change the theme when the button is clicked.
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "Dark Mode";
        }
    });


    // -----------------------------
    // Current Year
    // -----------------------------

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
