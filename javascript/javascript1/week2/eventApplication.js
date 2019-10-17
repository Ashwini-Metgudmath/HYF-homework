// freecodecamp name Ashwini Metgudmath
// Event application function
function getEventWeekDay(eventDay){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    const date = new Date(); // returns today's date
    const today = date.getDay() + eventDay; // get today's day number and add in how many days event is there
    const eventDayIndex = today%7; 
    const eventWeekDay = daysOfWeek[eventDayIndex];
    return eventWeekDay;
}

console.log(getEventWeekDay(6));