// Student Manager
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName == ""){
        return "Student name is missing, please enter the name";
    }
    else if(class07Students.length > 6){
        return "Cannot add more students to class 07";
    }
    else if(class07Students.includes(studentName)){
        return "Student already exists in class 07";
    }
    else if(studentName == "Queen Margrethe"){
        class07Students.push(studentName);
    }else{
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(addStudentToClass("AshwiniM"));
console.log(addStudentToClass("Emma"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Guru"));
console.log(addStudentToClass("Eva"));
console.log(addStudentToClass("Anna"));
console.log(addStudentToClass("Queen Margrethe"));
console.log(addStudentToClass("Sham"));
console.log(getNumberOfStudents());
console.log(class07Students);