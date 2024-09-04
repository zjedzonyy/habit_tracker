import { createCalendar } from "./calendar";
import { getStoredHabits } from "./utilis";

export default function loadUHSPage() {
  const mainContent = document.getElementById("main_content");

  // Create a form element for habit checking
  const habitChecker = document.createElement("form");
  habitChecker.id = "habit-check";

  // Append the form to the main content
  mainContent.appendChild(habitChecker);

  // Create the calendar inside the form
  createCalendar(habitChecker);

  // Continue with the rest of the form elements
  const habitSelect = document.createElement("select");
  habitSelect.id = "habit";
  habitSelect.name = "habit";

  const habitLabel = document.createElement("label");
  habitLabel.setAttribute("for", "habit");
  habitLabel.textContent = "Select Habit";

  const options = getStoredHabits();

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData["name"];
    option.textContent = optionData["name"];
    habitSelect.appendChild(option);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Update Habit Status";

  // Append the form elements
  habitChecker.appendChild(habitLabel);
  habitChecker.appendChild(habitSelect);
  habitChecker.appendChild(submitBtn);

  const styles = `
    #main_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0rem;
        gap: 0.1rem;
        width: 100%;
    }
    
    #habit-check {
        width: 100%;
        background-color: #444;
        color: #F4F4F4;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-height: 100%;
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
    
    select, button {
        width: 100%;
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #333;
        color: #F4F4F4;
        font-size: 1rem;
        margin-bottom: 1rem; 
    }
    
    button {
        background-color: #FFD700;
        color: #333;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    button:hover {
        background-color: #FFA500;
    }
    
    `;

  const styleSheet = document.createElement("style");
  styleSheet.id = "dynamicStyles";
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
