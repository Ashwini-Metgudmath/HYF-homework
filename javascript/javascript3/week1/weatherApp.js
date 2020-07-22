
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d42a7e3657f1933063dcd1ab8b3c6c7b";
const btnSubmit = document.getElementById("submit");

const para = document.createElement('p');
const div = document.querySelector('#output');

function getData(city){
    const url = baseUrl+'q='+city+'&appid='+apiKey;
    return fetch(url).then(response =>{
            return response.json();
    });
}


btnSubmit.addEventListener('click', () => {
    para.textContent = '';
    const txtCityName = document.querySelector("#city");
    
    if(txtCityName.value.toLowerCase()){
        getData(txtCityName.value.toLowerCase()).then(data =>{
            renderData(data);
        });
    }
    else{
        div.innerHTML = '';
        para.textContent = 'Enter city name';
        div.appendChild(para);
        
    }
    
});



function renderData(data){
    div.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('output-data')
        const liWeather = document.createElement('li');
        const weatherIcon = document.createElement('div');
        liWeather.innerHTML = `Weather : ${data.weather[0].description}`;
        const liTemp = document.createElement('li');
        liTemp.innerHTML = `Temperature: ${Math.floor(data.main.temp - 273)}`;
        
        
        ul.appendChild(liWeather);
        ul.appendChild(liTemp);
   div.appendChild(ul);
}