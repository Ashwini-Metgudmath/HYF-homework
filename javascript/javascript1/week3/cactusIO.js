// smart phone usage app

const activities = [];
const usageLimit = 120;
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
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  

function addActivity(activity, duration){
    const date = formatDate(new Date());
  if(typeof(activity)==="string" && typeof(duration)==="number"){
      activities.push({date,activity,duration});
      return "Activity added";
  }
  else{
      return "Please enter valid activity of type string and duration of type number";
  }
}

function showStatus(){
    var totalDuration = 0;
    if(activities.length == 0){
        return "Please enter activites before showing status";
    }
    else{
        for(let i=0; i<activities.length; i++){
            totalDuration += activities[i].duration;
        }
        if(totalDuration >= usageLimit){
            return "You have reached your limit, no more smartphoning for you!";
        }
        else
        return `You have added total ${activities.length} activities of duration ${totalDuration} mins`;
    }
    
}

console.log(addActivity("Facebook", 30));
console.log(addActivity("Youtube", 20));
console.log(addActivity("LinkedIn", 25));
console.log(activities);
console.log(showStatus());