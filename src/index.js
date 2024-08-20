// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import createHabit from "./createHabit.js";

// kreator habitow
// dodawanie habitow do routines
// importowanie habitow i rutyn do kalendarza

const habit = createHabit("Swim", "Often");

console.log(habit.describe());