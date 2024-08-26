import {Habit, StreakHabit} from "./createHabit";
import { validateHabitName } from "./formValidation";

export default function storeNewHabitData() {
    document.getElementById('add-habit').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const formData = new FormData(this);
        const name = formData.get('habitNameInput');
        if (validateHabitName(name)) {
            alert(validateHabitName(name));
            return;
        }
        const streak = formData.get('streakGoal');
        const completionsPerDay = formData.get('completionsPerDay');
        const priority = formData.get('priority');

        let habit;
        if (streak === 'none') {
            habit = new Habit(name, completionsPerDay, priority);
            
        } else {
            habit = new StreakHabit(name, streak, completionsPerDay, priority);
            
        }

        // Get existing habits from localStorage
        const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];

        // Add the new habit to the array
        storedHabits.push(habit);

        // Save the updated array back to localStorage
        localStorage.setItem('habits', JSON.stringify(storedHabits));

        console.log(localStorage.getItem('habits'));
        
        
    });
}

//TODO: create a module to add standard habits to localStorage
