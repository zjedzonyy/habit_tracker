// creater a calendar
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export let selectedDate = null; // Variable to store the selected date

export function createCalendar() {
    const mainContent = document.getElementById('main_content');
    const habitCheck = document.createElement('form');
    habitCheck.id = 'habit-check';
    habitCheck.textContent = 'Check Habit';

    const calendarEl = document.createElement('div');
    calendarEl.id = 'calendar';
    
    let calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
        }
    });

    habitCheck.appendChild(calendarEl);
    mainContent.appendChild(habitCheck);
    calendar.render();

    // Trigger a resize to fix layout issues
    setTimeout(() => {
        calendar.updateSize();
    }, 0); 

    calendar.on('dateClick', function(info) {
        selectedDate = info.dateStr;
        console.log('clicked on ' + info.dateStr);
      });
}
