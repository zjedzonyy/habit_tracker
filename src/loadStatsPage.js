import { createCalendar } from "./calendar";
import { getStoredHabits, isThereAGoal, returnHabitData } from "./utilis";

export default function loadStatsPage() {
    const mainContent = document.getElementById('main_content');

    // Create a div element for habit stats
    const habitStats = document.createElement('div');
    habitStats.id = 'habit-stats';

    // Append the div to the main content
    mainContent.appendChild(habitStats);

    // Create the calendar inside the div
    createCalendar(habitStats);

    // Create the habit select dropdown
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

    // Append the label and select dropdown to the habitStats div
    habitStats.appendChild(habitLabel);
    habitStats.appendChild(habitSelect);

    // Reset calendar colors
    function resetCalendarColors() {
        const coloredCells = document.querySelectorAll('td[style*="background-color"]');
        coloredCells.forEach(cell => {
            cell.style.backgroundColor = ''; // Reset the background color
        });
    }

    // Control screen and update calendar based on selected habit
    function controllScreen() {
        resetCalendarColors();

        let habitData = returnHabitData(habitSelect.value);
        habitData.completionsDatestamp.forEach(date => {
            let cell = document.querySelector(`td[data-date="${date}"]`);
            if (cell && isThereAGoal(habitData)) {
                cell.style.backgroundColor = 'green';
            } else if (cell && !isThereAGoal(habitData)) {
                cell.style.backgroundColor = 'green';
            }
        });
    }

    // Add event listeners to update the screen on habit selection or button clicks
    habitSelect.addEventListener("change", controllScreen);

    const btns = mainContent.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', controllScreen);
    });

    // Initial call to set up the screen
    controllScreen();

    // Styling for the stats page
    const styles = 
    `
    #main_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0rem;
        gap: 0.1rem;
        width: 100%;
    }

    #habit-stats {
        width: 100%;
        background-color: #444;
        color: #F4F4F4;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    #calendar {
        width: 70%;
        height: 70%;
        border-radius: 8px;
        margin-bottom: 1rem;
        background-color: #333;
    }

    label {
        font-size: 1.2rem;
        color: #FFD700;
        margin-bottom: 0.5rem;
        text-align: left;
        width: 100%;
    }

    select {
        width: 100%;
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #333;
        color: #F4F4F4;
        font-size: 1rem;
        margin-bottom: 1rem; 
    }

    `;

    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
