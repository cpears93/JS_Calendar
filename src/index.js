import { isWeekend, getDayName } from "./date-helpers.js";

const calendar = document.querySelector("app-calendar");

for (let day = 1; day < 31; day++) {
    
    const weekend = isWeekend(day);

    let name = '';
    if (day <  7) {
        const dayTime = getDayName(day);
        name = `div class="name">${dayName}</div>`;

    }

    const dayName = getDayName(day);

    calendar.insertAdjacentHTML("beforeend", `div class="day ${weekend ? "weekend" : ""}">div class="name">
    ${dayName}</div>${day}</div>`);
} 

document.querySelectorAll("#app-calendar .day").forEach(day => {
    day.addEventListener("click", event => {
        event.currentTarget.classList.toggle("selected");
    }); 
});