import { habitDone, toDoToday } from "./utilis";
export default function loadHomePage() {
    const mainContent = document.getElementById('main_content');
    
    const hi = document.createElement('h1');
    hi.textContent = 'Welcome to your Habit Tracker';

    const taskList = document.createElement('ul');
    const habitsToDo = toDoToday();
    console.log(habitsToDo);
    let habitsToDoArray;
    if (habitsToDo.length > 1) {
        habitsToDoArray = Array.from(habitsToDo);
    } else if (habitsToDo.length === 1) {
        habitsToDoArray = [habitsToDo];
    } else {
        habitsToDoArray = 'nothing to do';
    }

    console.log(habitsToDoArray);
    habitsToDoArray.forEach(habit => {
        console.log(habit);
        const el = document.createElement('li');
        const name = document.createElement('p')
        const priority = document.createElement('p');
        const completed = document.createElement('p');
        name.textContent = habit.name;
        priority.textContent = habit.priority;
        if (habitDone(habit)) {
            completed.textContent = 'done';
        } else {
            completed.textContent = 'not yet';
        }
        el.appendChild(name);
        el.appendChild(priority);
        el.appendChild(completed);
        taskList.appendChild(el);
    })

    mainContent.appendChild(hi);
    mainContent.appendChild(taskList);
    // welcome message
    // task to do today
    // stats scheme
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
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
    }
    li {
        background-color: white;
        width: 10rem;
    }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
