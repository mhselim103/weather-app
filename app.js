
const loadApi = () => {
    const inputField = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=8bd932c73dd6f02c54a62f6ea3bd252a`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadWeather(data))
    input.value = '';

};
const loadWeather = data => {
    const innerTemp = `${data.main.temp}` - 273.15;
    document.getElementById('temp').innerText = innerTemp.toFixed(2);
    document.getElementById('city').innerText = `${data.name}`;
    document.getElementById('description').innerText = `${data.weather[0].description}`;
    
};
