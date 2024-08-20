// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import loadHomePage from "./loadHomePage.js";
import loadMenuPage from "./loadMenuPage.js";
import loadAboutPage from "./loadAboutPage.js";

function addListenersToButtons() {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about");
    const content = document.getElementById("content");
    const myGithub = document.getElementById("github");
    const buttons = document.querySelectorAll('nav button');
    // remove html and style for the content div
    function cleanContent() {
        const styleSheet = document.getElementById("dynamicStyles");
        if (styleSheet) {
            styleSheet.remove();
        }
        content.innerHTML = "";
    }

    // display active button
    function setActiveButton(clickedButton) {
        buttons.forEach(button => {
            button.classList.remove('button-active');
        });
        clickedButton.classList.add('button-active');
    }

    console.log(home);
    home.addEventListener("click", () => {
        setActiveButton(home);
        cleanContent();
        loadHomePage();
    })

    menu.addEventListener("click", () => {
        setActiveButton(menu);
        cleanContent();
        loadMenuPage();
    })

    about.addEventListener("click", () => {
        setActiveButton(about);
        cleanContent();
        loadAboutPage();
    })

    myGithub.addEventListener("click", () => {
        window.location.href = 'https://github.com/zjedzonyy';
    })
}


addListenersToButtons();
loadHomePage();