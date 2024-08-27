import createCalendar from "./calendar";
import { getStoredHabits } from "./utilis";

export default function loadNewRoutinePage() {
    const mainContent = document.getElementById('main_content');
    createCalendar();
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

    mainContent.appendChild(habitLabel);
    mainContent.appendChild(habitSelect);

    

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

// document.getElementById('taskForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting in the traditional way

//     const formData = new FormData(this);
//     const taskName = formData.get('taskName');
//     const priority = formData.get('priority');

//     console.log('Task Name:', taskName);
//     console.log('Priority:', priority);
    
//     // Here you could also add the task to a list, clear the form, etc.
// });
