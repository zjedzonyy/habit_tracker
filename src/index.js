// index.js
import "./styles.css";
import createHabit from "./createHabit.js";
import loadHabitPage from "./loadHabitPage.js";
import { storeNewHabitData, checkHabitCompletion } from "./storeNewHabitData.js";
import fillLocalStorage from "./fillLocalStorage.js";
import loadUHSPage from "./loadUHSPage.js";
import loadStatsPage from "./loadStatsPage.js";
import loadHomePage from "./loadHomePage.js";
// kreator habitow
// dodawanie habitow do routines
// importowanie habitow i rutyn do kalendarza

function main() {
    const content = document.getElementById('main_content');
    fillLocalStorage();

    // remove html and style for the content div
    function cleanContent() {
        const styleSheet = document.getElementById("dynamicStyles");
        if (styleSheet) {
            styleSheet.remove();
        }
        content.innerHTML = "";
    }

    const newHabit = document.getElementById('new-habit');
    newHabit.addEventListener("click", () => {
        cleanContent()
        loadHabitPage();
        storeNewHabitData();
    })

    const newRoutine = document.getElementById('update');
    newRoutine.addEventListener("click", () => {
        cleanContent()
        loadUHSPage();
        checkHabitCompletion();
    })

    const stats = document.getElementById('statistics');
    stats.addEventListener("click", () => {
        cleanContent();
        loadStatsPage();
    })

    const home = document.getElementById('home');
    home.addEventListener('click', () => {
        cleanContent();
        loadHomePage();
    })
}


main();
loadHomePage();
// localStorage.clear();
console.log(localStorage);