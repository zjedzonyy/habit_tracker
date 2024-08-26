// utilities functions

export function getStoredHabits() {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    return storedHabits;
}
