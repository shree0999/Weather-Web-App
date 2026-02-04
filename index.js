const checkWeather = async(name) => {
    const apiid = "a210c77ec2a79a0297ac2d172ad90486"
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiid}&units=metric`

    const res = await fetch(apiurl);
    const data = await res.json()
    
    console.log(data)


    const img = document.querySelector(".weather")
    if(data.weather[0].main == "Clouds"){
        img.src = "assets/clouds.png"
    } else if (data.weather[0].main == "Clear"){
        img.src = "assets/clear.png"
    } else if (data.weather[0].main == "Rain"){
        img.src = "assets/rain.png"
    } else if (data.weather[0].main == "Mist"){
        img.src = "assets/mist.png"
    } else if (data.weather[0].main == "Snow"){
        img.src = "assets/snow.png"
    } else if (data.weather[0].main == "Drizzle"){
        img.src = "assets/drizzle.png"
    }


    document.querySelector("#country").innerHTML = data.name;

    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector("#des").innerHTML = data.weather[0].description;

    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

    document.querySelector("#windspeed").innerHTML = data.wind.speed + " km/h";

}

document.querySelector(".inp button").addEventListener(
    "click", ()=> {
        const location = document.querySelector(".inp input").value;
        checkWeather(location); 
    }
)

checkWeather("pune");