// freecodecamp user name Ashwini Metgudmath
// Weather wear application
function weatherWear(temperature){
    if(temperature<10){
        return "Thermals, jeans and jacket";
    }
    else if(temperature>=10 && temperature<20){
        return "Jeans and sweatwear";
    }
    else{
        return "Shorts and T-shirt";
    }
    }
    
    console.log(weatherWear(10));