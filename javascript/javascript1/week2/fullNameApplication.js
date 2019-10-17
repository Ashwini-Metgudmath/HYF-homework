// freecodecamp name Ashwini Metgudmath
//Flight booking fullname function
function getFullname(firstName, lastName, useFormalName){

    if(firstName === ""){
        return "Please enter first name";
    }
   else if(lastName === ""){
        return "Please enter last name";
    }
    else if(useFormalName){
        return ("Mr/Mrs" + " " + firstName + " " + lastName);
    }else{
        return firstName +" "+lastName;
    }
    
}

const fullName1 = getFullname("Benjamin", "H", false);
const fullName2 = getFullname("Benjamin", "Hughes", true);

console.log(fullName1);
console.log(fullName2);