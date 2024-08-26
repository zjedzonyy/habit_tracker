// logic for creating habit

// habit musi miec: 
// NAME,
// CZESTOTLIWOSC,
// WAZNOSC ZADANIA,
// O JAKIEJ PORZE?,
// WYKONANE?

export class Habit {
    constructor(name, completionsPerDay, priority) {
        this.name = name;
        this.completionsPerDay = completionsPerDay;
        this.priority = priority;
    }
}

export class StreakHabit extends Habit {
    constructor(name, streakGoal, completionsPerDay, priority) {
        super(name, completionsPerDay, priority);
        this.streakGoal = streakGoal;
    }
}
// class Habit {
//     constructor(name, frequency, importance, timeOfDay, finished) {
//         this.name = name;
//         this.frequency = frequency;
//         this.importance = importance;
//         this.timeOfDay = timeOfDay;
//         this.finished = finished;
//     }
// }



// export default function createHabit(name, importance) {
//     function describe() {
//         return `Nazwa: ${this.name}, Importance: ${this.importance}`;
//     }

//     return {
//         name,
//         importance,
//         describe
//     };
// }

// // function () {

// // }

// // function without() {

// // }
