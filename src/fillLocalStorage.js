import {Habit, StreakHabit} from "./createHabit";



export default function fillLocalStorage() {
    const swim = new Habit('swim', 1, 'medium');
    const cook = new Habit('cook', 2, 'low');
    const learn = new Habit('learn', 1, 'high');
    const walk = new Habit('walk', 1, 'high');
    const calorieDeficit = new StreakHabit('calorie deficit', 1, 'high');
    // Get existing habits from localStorage
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];

    // Add the new habit to the array if the localStorage is empty
    if (storedHabits.length === 0) {
        storedHabits.push(swim, cook, learn, walk, calorieDeficit);

        // Save the updated array back to localStorage
        localStorage.setItem('habits', JSON.stringify(storedHabits));
    }


    console.log(localStorage.getItem('habits'));
        
        
}

