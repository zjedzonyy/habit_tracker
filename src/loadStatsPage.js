import { createCalendar } from "./calendar";
import { calculateProgress, compareToGoal, getStoredHabits, returnHabitData } from "./utilis";

export default function loadStatsPage() {
    const mainContent = document.getElementById('main_content');

    // Create a form element for habit checking
    const habitStats = document.createElement('div');
    habitStats.id = 'habit-stats';
    habitStats.textContent = 'Habit Stats';
    
    // Append the form to the main content
    mainContent.appendChild(habitStats);
    
    // Create the calendar inside the div
    createCalendar(habitStats);
    
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

    // display progress

    function resetCalendarColors() {
        // Select all <td> elements that have a background color applied
        const coloredCells = document.querySelectorAll('td[style*="background-color"]');
    
        // Loop through and remove the background color
        coloredCells.forEach(cell => {
            cell.style.backgroundColor = ''; // Reset the background color
        });
    }
    function controllScreen() {
        // clear calendar
        resetCalendarColors();

        let habitData = returnHabitData(habitSelect.value);
        console.log(habitData.completionsDatestamp);
        habitData.completionsDatestamp.forEach(date => {
            let cell = document.querySelector(`td[data-date="${date}"]`);
            // if there's no goal
            if (cell && compareToGoal(habitData)) {
                cell.style.backgroundColor = 'green';
            } else {
                cell.style.backgroundColor = 'yellow';
            }
        })
    }


    controllScreen()
    habitSelect.addEventListener("change", function() {
        controllScreen();
    })

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

    // data-date="2024-8-15"
    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
