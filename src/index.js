// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import createHabit from "./createHabit.js";
import loadHabitPage from "./loadHabitPage.js";
import getNewHabitData from "./getNewHabitData.js";

// kreator habitow
// dodawanie habitow do routines
// importowanie habitow i rutyn do kalendarza

const habit = createHabit("Swim", "Often");

function main() {
    const newHabit = document.getElementById('new-habit');
    newHabit.addEventListener("click", () => {
        loadHabitPage();
        getNewHabitData();
    })
}


main();
console.log(habit.describe());