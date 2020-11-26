const isWeekend = day => {
    console.log(day + `: ${day & 7}`);
}

const getDayName = day => {
    const date = Date.now(Date.UTC(2018, 0, day));

    return dayName = new Intl.DateTimeFormat("en-US", {weekday: "short"})
    .format(date);
}

export {isWeekend, getDayName}