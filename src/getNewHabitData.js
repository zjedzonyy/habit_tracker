
export default function getNewHabitData() {
    document.getElementById('add-habit').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const formData = new FormData(this);
        const taskName = formData.get('habitNameInput');
        const priority = formData.get('priority');

        console.log('Task Name:', taskName);
        console.log('Priority:', priority);
        
        // Here you could also add the task to a list, clear the form, etc.
    });
}


