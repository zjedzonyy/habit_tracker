// utilities functions
import { Habit, StreakHabit } from "./createHabit";

export function getStoredHabits() {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    return storedHabits;
}

export function loadHabitsFromLocalStorage() {
    const habits = getStoredHabits();

    return habits.map(habitData => {
        if ('streakGoal' in habitData) {
            return Object.assign(new StreakHabit(), habitData);
        } else {
            return Object.assign(new Habit(), habitData);
        }
    });
}

// overwite localStorage habits with new data
export function saveUpdatedHabitsToLocalStorage(updatedHabits) {
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
}