// creater a calendar
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export let selectedDate = null; // Variable to store the selected date

export function createCalendar(container) {
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

    container.appendChild(calendarEl);
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
