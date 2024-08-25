// logic for creating habit

// habit musi miec: 
// NAME,
// CZESTOTLIWOSC,
// WAZNOSC ZADANIA,
// O JAKIEJ PORZE?,
// WYKONANE?

export default class Habit {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
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
