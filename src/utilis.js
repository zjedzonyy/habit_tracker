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

export function findHabitByName(habits, habitName) {
    return habits.find(habit => habit.name === habitName);
}

// controll logic behind displaying things
export function returnHabitData(habitName) {
    const habits = getStoredHabits();
    const habitData = findHabitByName(habits, habitName);

    return habitData;
}

// return true if there is a goal, false otherwise
export function isThereAGoal(habitData) {
    if (!habitData.streakGoal) {
        return false;
    } return true;
}

// find habits to complete 
export function toDoToday() {
    const habits = getStoredHabits();
    return habits.filter(habit => habit.streakGoal === 'daily');
}

// find if the habit was completed today
export function habitDone(habit) {
    const today = new Date().toISOString().split('T')[0];
    return habit.completionsDatestamp.includes(today);
}