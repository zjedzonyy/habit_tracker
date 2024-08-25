import Habit from "./createHabit";



export default function fillLocalStorage() {
    const swim = new Habit('swim', 'medium');
    const cook = new Habit('cook', 'low');
    const learn = new Habit('learn', 'high');
    const walk = new Habit ('walk', 'high');

    // Get existing habits from localStorage
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];

    // Add the new habit to the array if the localStorage is empty
    if (storedHabits.length === 0) {
        storedHabits.push(swim, cook, learn, walk);

        // Save the updated array back to localStorage
        localStorage.setItem('habits', JSON.stringify(storedHabits));
    }


    console.log(localStorage.getItem('habits'));
        
        
}

