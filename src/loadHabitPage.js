// js for generating NEW HABIT page

function createRadioButtonInput() {
  const element = document.createElement("input");

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
    },
  };
}

export default function loadHabitPage() {
  const mainContent = document.getElementById("main_content");

  const addHabit = document.createElement("form");
  addHabit.id = "add-habit";
  const habitNameInput = document.createElement("input");
  habitNameInput.id = "name-input";
  habitNameInput.placeholder = "Dance";
  habitNameInput.name = "habitNameInput";

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name-input");
  nameLabel.textContent = "Name";

  const priorityInput = document.createElement("fieldset");
  priorityInput.legend = "Select Habit Priority";

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "fieldset");
  priorityLabel.textContent = "Priority";

  const lowPriority = document.createElement("label");
  lowPriority.textContent = "Low";
  const lowPriorityInput = createRadioButtonInput()
    .type("radio")
    .name("priority")
    .value("low")
    .className("radio-button")
    .appendTo(lowPriority);

  const mediumPriority = document.createElement("label");
  mediumPriority.textContent = "Medium";
  const mediumPriorityInput = createRadioButtonInput()
    .type("radio")
    .name("priority")
    .value("medium")
    .className("radio-button")
    .appendTo(mediumPriority);

  const highPriority = document.createElement("label");
  highPriority.textContent = "High";
  const highPriorityInput = createRadioButtonInput()
    .type("radio")
    .name("priority")
    .value("high")
    .className("radio-button")
    .appendTo(highPriority);

  priorityInput.appendChild(lowPriority);
  priorityInput.appendChild(mediumPriority);
  priorityInput.appendChild(highPriority);

  const select = document.createElement("select");
  select.id = "streak-goal";
  select.name = "streakGoal";

  const streakLabel = document.createElement("label");
  streakLabel.setAttribute("for", "streak-goal");
  streakLabel.textContent = "Goal";

  const options = [
    { value: "none", text: "None" },
    { value: "daily", text: "Daily" },
    { value: "weekly", text: "Weekly" },
    { value: "monthly", text: "Monthly" },
  ];

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    select.appendChild(option);
  });

  const cpd = document.createElement("input");
  cpd.type = "number";
  cpd.min = 1;
  cpd.step = 1;
  cpd.max = 99;
  cpd.placeholder = 1;
  cpd.id = "completions-per-day";
  cpd.name = "completionsPerDay";

  const cpdLabel = document.createElement("label");
  cpdLabel.setAttribute("for", "completions-per-day");
  cpdLabel.textContent = "Completions Per Day";

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";

  addHabit.appendChild(nameLabel);
  addHabit.appendChild(habitNameInput);
  addHabit.appendChild(streakLabel);
  addHabit.appendChild(select);
  addHabit.append(cpdLabel);
  addHabit.append(cpd);
  addHabit.appendChild(priorityLabel);
  addHabit.appendChild(priorityInput);
  addHabit.appendChild(submitBtn);
  mainContent.appendChild(addHabit);

  // Control screen
  cpd.disabled = true;
  cpd.value = 0;
  select.addEventListener("change", function () {
    if (select.value === "none") {
      cpd.disabled = true;
    } else {
      cpd.disabled = false;
    }
  });

  const styles = `
    #main_content {
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 2rem;
        background-color: #444;
    }
    #add-habit {
        background-color: #333333;;
        color: #F4F4F4;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        padding: 1rem;
        gap: 0.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-height: 90%;
    }

    fieldset {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: none;
        width: 100%;
    }

    input[type="radio"] {
        width: 1.5rem;
        height: 1.5rem;
    }

    label {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    #name-input, select, input[type="text"], input[type="number"], button {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #333;
        color: #F4F4F4;
    }

    button {
        background-color: #FFD700;
        color: #333;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-bottom: 0;
    }

    button:hover {
        background-color: #FFA500;
    }

    .radio-button {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.id = "dynamicStyles";
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
