import { habitDone, toDoToday } from "./utilis";
export default function loadHomePage() {
    const mainContent = document.getElementById('main_content');
    
    const hi = document.createElement('h1');
    hi.textContent = 'Your tasks for today!';
    hi.className = 'welcome-title';

    const taskList = document.createElement('ul');
    taskList.className = 'task-list';

    const habitsToDo = toDoToday();
    let habitsToDoArray;
    if (habitsToDo.length > 1) {
        habitsToDoArray = Array.from(habitsToDo);
    } else if (habitsToDo.length === 1) {
        habitsToDoArray = [habitsToDo];
    } else {
        habitsToDoArray = [];
        const noTaskMessage = document.createElement('p');
        noTaskMessage.textContent = 'No habits to complete today!';
        taskList.appendChild(noTaskMessage);
    }

    console.log(habitsToDoArray);
    habitsToDoArray.forEach(habit => {
        const el = document.createElement('li');
        el.className = 'task-item';

        const name = document.createElement('p');
        name.className = 'task-name';
        name.textContent = habit.name;

        const priority = document.createElement('p');
        priority.className = 'task-priority';
        priority.textContent = `Priority: ${habit.priority}`;

        const completed = document.createElement('p');
        completed.className = 'task-status';
        completed.textContent = habitDone(habit) ? 'Status: Done' : 'Status: Not yet';

 
        el.appendChild(name);
        el.appendChild(priority);
        el.appendChild(completed);
        taskList.appendChild(el);
    })

    mainContent.appendChild(hi);
    mainContent.appendChild(taskList);

    const styles = 
    `
    #main_content {
        padding: 2rem;
        background-color: #444;
        overflow-y: scroll;
    }

    .welcome-title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
        text-align: center;
        color: #FFD700; /* Gold */
    }

    .task-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        padding: 0;
        list-style-type: none;
    }

    .task-item {
        background-color: #333333;
        color: #FFFFFF;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 200px;
        max-width: 300px;
        text-align: center;
    }

    .task-name {
        margin: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .task-priority {
        font-size: 1.1rem;
        margin: 0;
    }

    .task-status {
        margin: 0;
        font-size: 1rem;
        color: #FFD700; /* Gold */
    }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
