import Habit from "./createHabit";

export default function storeNewHabitData() {
    document.getElementById('add-habit').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const formData = new FormData(this);

        const habit = new Habit(formData.get('habitNameInput'), formData.get('priority'));

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
