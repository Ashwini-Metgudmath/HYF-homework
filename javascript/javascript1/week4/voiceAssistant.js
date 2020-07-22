// Voice assistand application
const usersList = {
    name: '',
    todosList: [],
    day: '',
    math: 0,
    favoriteDish: '',
    myCalendar: []

};

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' of ' + monthNames[monthIndex] + ' ' + year;
  }

function getReply(command){
const commandToLower = command.toLowerCase();
if(commandToLower.includes("Hello my name is")){
    const stringArray = commandToLower.split(" ");
    const name = stringArray[stringArray.length - 1];
    usersList.name = name;
    return `nice to meet you ${usersList.name}`;
}else if(commandToLower.includes('what is my name')) {
    if(usersList.name === undefined){
        return `You have not introduced yourself`;
    } else {
    return `${usersList.name}`;
 } 
}
 // add or reove todo list
 else if(commandToLower.endsWith('todo') || commandToLower.endsWith('todo?')) {
    const todoCommand = commandToLower.split(" ");
    const addToDoList = todoCommand.slice(1, -3);
    const addToDoListJoin = addToDoList.join(" ");
  if(commandToLower.startsWith('add')) {
    usersList.todosList.push(addToDoListJoin);
    return `${addToDoListJoin} added to your todo`;
} else if (commandToLower.startsWith('remove')) {
    const removeToFindIndex = usersList.todosList.indexOf(addToDoListJoin);
    const removeToDo = usersList.todosList.splice(removeToFindIndex, 1);
    return `Removed ${addToDoListJoin} from my todo`;
} else if(commandToLower.startsWith('what is')) {
    return `You have ${usersList.todosList.length} todos - ${usersList.todosList.join(' and ')}`;
}
                      // Day 
}
else if(commandToLower.includes('What day')){
usersList.day = formatDate(new Date());
return usersList.day;
}
else if(commandToLower.startsWith("What is") && typeof(commandToLower[6] == "number")&& typeof(commandToLower[8] == "number")){
    const strings = commandToLower.split(" ");
    let operator = strings[3];
    let operand1 = Number(strings[2]);
    let operand2 = Number(strings[4]);
    if(operator === '+'){
        usersList.math = operand1 + operand2;
    }
    else if(operator === '-'){
        usersList.math = operand1 - operand2;
    }
    else if(operator === '*'){
        usersList.math = operand1*operand2;
    }
    else if(operator === '/'){
        usersList.math = operand1/operand2;
    }
    return `Answer is ${usersList.math}`;
}
else if(commandToLower.includes("My favorite dish is")){
    const favDish = commandToLower.split(" ");
    usersList.favoriteDish = favDish[4];
}
else if(commandToLower.includes("What is my favorite dish")){
    return `Your favorite dish is ${usersList.favoriteDish}`;
}
else if (commandToLower.includes("Set a timer for 4 minutes")){
const timerString = commandToLower.split(" ");
milliseconds = Number(timerString[4])*1000;
Console.log(`Timer set for ${timerString[4]} miniutes`);
function myFunction() {
    Console.log("Timer done");
  }
setTimeout(myFunction, milliseconds);
}
else if(commandToLower.includes("Add") && commandToLower.endsWith("calender")){
    const taskString = commandToLower.split(" ");
    const day = formatDate(taskString.slice(4, 5));
    usersList.myCalendar.push({name: taskString.slice(1, 3), date:day});
}
else if (commandToLower.includes("What am I doing this week?")){
    return `"This week you have 1 event: ${usersList.myCalendar[0].name} the ${usersList.myCalendar[0].date}`;
}
}

console.log(getReply("Hello my name is Ashwini"));
//console.log(getReply("What is my name"));
/*console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Add dancing on the floor to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today'));
console.log(getReply('what is 8 * 6'));
console.log(getReply('My favorite dish is lasagne'));
console.log(getReply('What is my favorite dish'));
console.log(getReply('Add Bike ride the 26/09/2019 to my calendar'));
console.log(getReply('Add camp adventure the 28/09/2019 to my calendar'));
console.log(getReply('What am I doing this week?'));
console.log(getReply('set a timer for 4 minutes'));
console.log(usersList);*/