// js for generating html

// habit musi miec: 
// NAME,
// WAZNOSC ZADANIA,

function createRadioButtonInput() {
    const element= document.createElement('input');

    return {
        el: element,
        type(type) {
            this.el.type = type;
            return this;
        },
        name(name) {
            this.el.name = name;
            return this;
        },
        value(value) {
            this.el.value = value;
            return this;
        },
        appendTo(parent) {
            parent.appendChild(this.el);
            return this;
        },
        className(name) {
            this.el.className = name;
            return this;
        }
    };
}


export default function loadHabitPage() {
    const mainContent = document.getElementById('main_content');
    
    const addHabit = document.createElement('form');
    addHabit.id = 'add-habit';
    addHabit.textContent = "create a habit";

    const habitNameInput = document.createElement('input');
    habitNameInput.placeholder = 'Name';
    habitNameInput.name = 'habitNameInput';

    const priorityInput = document.createElement('fieldset');
    priorityInput.legend = "Select Habit Priority";

    const lowPriority = document.createElement('label');
    lowPriority.textContent = 'Low';
    const lowPriorityInput = createRadioButtonInput()
        .type('radio')
        .name('priority')
        .value('low')
        .className('radio-button')
        .appendTo(lowPriority);

    const mediumPriority = document.createElement('label');
    mediumPriority.textContent = 'Medium';
    const mediumPriorityInput = createRadioButtonInput()
        .type('radio')
        .name('priority')
        .value('medium')
        .className('radio-button')
        .appendTo(mediumPriority);

    const highPriority = document.createElement('label');
    highPriority.textContent = 'High';
    const highPriorityInput = createRadioButtonInput()
    .type('radio')
    .name('priority')
    .value('high')
    .className('radio-button')
    .appendTo(highPriority);

    priorityInput.appendChild(lowPriority);
    priorityInput.appendChild(mediumPriority);
    priorityInput.appendChild(highPriority);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';


    addHabit.appendChild(habitNameInput);
    addHabit.appendChild(priorityInput);
    addHabit.appendChild(submitBtn);
    mainContent.appendChild(addHabit);

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
