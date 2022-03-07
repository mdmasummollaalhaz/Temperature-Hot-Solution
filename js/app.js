const API_KEY = `337696a90623230f31c53f9377ca416e`;

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    
}
const displayTemperature = temperature =>{
    console.log(temperature);
    
}