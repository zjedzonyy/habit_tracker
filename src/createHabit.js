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
    this.completions = 0;
    this.completionsDatestamp = [];
  }

  incrementCompletions() {
    this.completions += 1;
  }

  pushCompletionsDatestamp(datestamp) {
    this.completionsDatestamp.push(datestamp);
  }
}

export class StreakHabit extends Habit {
  constructor(name, streakGoal, completionsPerDay, priority) {
    super(name, completionsPerDay, priority);
    this.streakGoal = streakGoal;
    this.completionsDatestamp = [];
  }

  showProgress() {
    // Ensure streakGoal is not zero
    if (this.streakGol === 0) return 100;
    const progress = (this.completions / this.streakGoal) * 100;
    return progress;
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
