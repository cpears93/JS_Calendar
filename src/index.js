import { isWeekend } from "./date-helpers.js";

const calendar = document.querySelector("app-calendar");



for (let day = 1; day < 31; day++) {
    console.log(day)

    const weekend = isWeekend(day)

    calendar.insertAdjacentHTML("beforeend", `div class="day ${weekend ? "weekend" : ""}">${day}</div>`);
}