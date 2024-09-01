import { createCalendar } from "./calendar";
import { getStoredHabits } from "./utilis";

export default function loadUHSPage() {
    const mainContent = document.getElementById('main_content');

    // Create a form element for habit checking
    const habitChecker = document.createElement('form');
    habitChecker.id = 'habit-check';
    habitChecker.textContent = 'Check Habit';
    
    // Append the form to the main content
    mainContent.appendChild(habitChecker);
    
    // Create the calendar inside the form
    createCalendar(habitChecker);

    // Continue with the rest of the form elements
    const habitSelect = document.createElement('select');
    habitSelect.id = 'habit';
    habitSelect.name = 'habit';
    
    const habitLabel = document.createElement('label');
    habitLabel.setAttribute('for', 'habit');
    habitLabel.textContent = 'Select Habit';
    
    const options = getStoredHabits();
    
    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData["name"];
        option.textContent = optionData["name"];
        habitSelect.appendChild(option);
    });
    
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Update Habit Status';
    
    // Append the form elements
    habitChecker.appendChild(habitLabel);
    habitChecker.appendChild(habitSelect);
    habitChecker.appendChild(submitBtn);
    
 

    const styles = 
    `#add-habit {
        background-color: grey;
        display: flex;
        flex-direction: column;
        align-items: space-around;
        width: 25%;
        padding: 1rem;
        gap: 1rem;
    }
    fieldset {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: none;
        
    }
    input[type="radio"] {
        width: 2rem;
        height: 2rem;
    }
    label {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    #calendar {
        width: 50%;
        height: 50%;
    }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
