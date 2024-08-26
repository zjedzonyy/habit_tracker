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
