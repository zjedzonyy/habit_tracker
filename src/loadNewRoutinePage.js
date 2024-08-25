
export default function loadNewRoutinePage() {
    const mainContent = document.getElementById('main_content');
    // const savedHabits = document.getElementById('saved-habits');

    // const swimHabit = document.createElement('dive');
    // swimHabit.className = 'habit';
    // const swimHabitText = document.createElement('h3');
    // swimHabitText.textContent = 'swim';
    // const swimHabitPriority = document.createElement('h4');
    // swimHabitPriority.textContent = 'Medium';


    // swimHabit.appendChild(swimHabitText);
    // swimHabit.appendChild(swimHabitPriority);
    // savedHabits.appendChild(swimHabit);
    

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
