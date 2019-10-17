// freecodecamp username Ashwini Metgudmath
// Find your travel time
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function findTravelTime(travelInfo){
      const totalTravelTime = travelInfo.destinationDistance/travelInfo.speed;
      const totalHrs = Math.floor(totalTravelTime);
      const totalMins = Math.round((totalTravelTime-totalHrs)*60);
      return `${totalHrs} hours and ${totalMins} minutes`;
  }
  
  const travelTime = findTravelTime(travelInformation);
  console.log(travelTime); 