import { getStoredHabits} from "./utilis";

// functions validating form

export function validateHabitName(habitName) {
    const storedHabits = getStoredHabits()
    const hasName = storedHabits.some(habit => habit.name === habitName);

    if (habitName.trim() === '') {
        return 'Habit name cannot be empty';
    } 

    if (hasName === true) {
        return 'Habit already exists. Please remove it first.';
    }

    return null;
}

export function validateCompletionsPerDay(completionsPerDay, goal) {
    if (!completionsPerDay) {
        return 0;
    }
    if (completionsPerDay.trim() === '' && goal !== 'none') {
        return 'Completions Per Day cannot be empty';
    }
    if (completionsPerDay.trim() !== '' && goal === 'none') {
        return "Can't create wihtout indicating a goal";
    }
}

export function validatePriority(priority) {
    if (priority === null) {
        return 'You must select priority for that habit';
    }
}
