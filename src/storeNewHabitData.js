import {Habit, StreakHabit} from "./createHabit";
import { validateHabitName } from "./formValidation";
import { validateCompletionsPerDay } from "./formValidation";
import { validatePriority } from "./formValidation";
import { selectedDate } from './calendar';
import { loadHabitsFromLocalStorage, getStoredHabits, saveUpdatedHabitsToLocalStorage } from "./utilis";

// store newly created habbit
export function storeNewHabitData() {
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
        if (validateCompletionsPerDay(completionsPerDay, streak)) {
            alert(validateCompletionsPerDay(completionsPerDay, streak));
            return;
        }
        const priority = formData.get('priority');
        if (validatePriority(priority)) {
            alert(validatePriority(priority));
            return;
        }

        let habit;
        if (streak === 'none') {
            habit = new Habit(name, 'not indicated', priority);
            
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
        
        alert('Habit has been succesfully created!');
        
    });
}

// store and increment completion of a habbit
export function checkHabitCompletion() {
    document.getElementById('habit-check').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const habitChecked = formData.get('habit');
        // get calendar data
        const date = selectedDate;

        console.log(habitChecked);
        console.log(date);

        const habits = loadHabitsFromLocalStorage();

        // Check if the habit is found and increment its completions if it is
        const habitFound = habits.some(habit => {
            if (habit.name === habitChecked) {
                habit.incrementCompletions();
                habit.pushCompletionsDatestamp(date);
                return true; // Stop iterating and return true if the habit is found
            }
            return false;
        });

        // If no habit was found, alert the user
        if (!habitFound) {
            alert("No such habit");
        }

        // OVERWRITE localStorage habits with new data
        saveUpdatedHabitsToLocalStorage(habits);

    });
}
