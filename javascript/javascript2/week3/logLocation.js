
function logOut(delay, stringToLog){
    setTimeout(function(){
        console.log(stringToLog);
    }, delay);

}

const clickMeButton = document.querySelector('#clickMe');
clickMeButton.addEventListener('click', logOut(5000, 'this logged out after 5 seconds'));

const earthLogger = function(){
    console.log("Earth");
}

const saturnLogger = function(){
    console.log("Saturn");
}

const planetLogFunction = function(loggerFun){
    loggerFun();
}

//planetLogFunction(saturnLogger);

