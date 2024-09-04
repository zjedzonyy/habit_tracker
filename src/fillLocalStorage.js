import { Habit, StreakHabit } from "./createHabit";

export default function fillLocalStorage() {
  const goal = "not indicated";
  const swim = new Habit("swim", goal, "medium");
  const cook = new Habit("cook", goal, "low");
  const learn = new Habit("learn", goal, "high");
  const walk = new Habit("walk", goal, "high");

  const calorieDeficit = new StreakHabit(
    "calories deficit",
    "daily",
    1,
    "high",
  );
  const jump = new StreakHabit("jump", "daily", 1, "high");
  const fight = new StreakHabit("fight", "daily", 1, "medium");
  // Get existing habits from localStorage
  const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];

  // Add the new habit to the array if the localStorage is empty
  if (storedHabits.length === 0) {
    storedHabits.push(swim, cook, learn, walk, calorieDeficit, jump, fight);

    // Save the updated array back to localStorage
    localStorage.setItem("habits", JSON.stringify(storedHabits));
  }

  console.log(localStorage.getItem("habits"));
}
