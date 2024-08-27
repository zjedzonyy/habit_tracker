// creater a calendar
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function createCalendar() {
    const mainContent = document.getElementById('main_content');
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

    mainContent.appendChild(calendarEl);
    calendar.render();

    // Trigger a resize to fix layout issues
    setTimeout(() => {
        calendar.updateSize();
    }, 0); 

    calendar.on('dateClick', function(info) {
        console.log('clicked on ' + info.dateStr);
      });
}
