     // Time function
     function getTime(){
        const Time=new Date()
        const date=Time.getDate()
        const month=Time.getMonth()+1
        const year=Time.getFullYear()
        let hr=Time.getHours()
        const min=Time.getMinutes()
        const sec=Time.getSeconds()
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[Time.getDay()]; // get the day of the week
        
        setTimeout(()=>{getTime(),1000})
        const ampm = hr >= 12 ? 'PM' : 'AM';
        hr = hr % 12;
        hr = hr ? hr : 12;
        document.getElementById("time").innerHTML = `${hr}:${min}:${sec} ${ampm} ${dayOfWeek} ${date}-${month}-${year}`;
    }
//change background function
    const changeBackground=(climate)=>{
        switch(climate.toLowerCase()){
            case "rain" :
                urls="url(./Image/rain.gif)";
                break;
            case "clouds" :
                urls="url(./Image/clouds.gif)";
                break;
            case "drizzle" :
                urls="url(./Image/Drizzle.gif)";
                break;
            case "haze" :
                urls="url(./Image/haze.gif)";
                break;
            case "mist" :
                urls="url(./Image/mist.gif)";
                break;
            case "snow" :
                urls="url(./Image/snow.gif)";
                break;
            case "thunderstorm" :
                urls="url(./Image/Thunderstorm.gif)";
                break;
            default:
                urls="url(./Image/mist.gif)";
    
        }
        document.getElementById("weather-app").style.backgroundImage = urls;
    }

const search = async()=>{
    // console.log(place.value);
    
    // fetch data
    const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)

    data.json().then((details)=>{


        tempratre=Math.floor((details.main.temp)-273)

        weathers=details.weather[0].main

        weather_des=details.weather[0].description
        
        icon=details.weather[0].icon

        city=details.name
         
        country=details.sys.country
         
        feelslike=Math.floor((details.main.feels_like)-273)
        
        min_temp=Math.floor((details.main.temp_min)-273)
       
        mix_temp=Math.floor((details.main.temp_max)-273)
        
        pressure=details.main.pressure
        
        humidity=details.main.humidity
        
        wind=details.wind.speed
        
        // update data
        result.innerHTML=`<div class="row weather mt-3">
                                <div class="col-md-6">
                                    <!-- weather details left box -->
                                    <div class="weather-first">
                                        <div class="heading text-center">
                                            <h1>Current Weather</h1>
                                            <h4 id="time"></h4>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center p-3">
                                            <img src="./icon/${icon}.png" alt="" height="150px">
                                            <div class="condition pe-5">
                                                <h1 >${tempratre}&deg;C</h1>
                                                <h3> ${weathers} </h3>
                                            </div>
                                        </div>
                                        <h2 class="text-center location">${city},${country}</h2>
                                    </div>
                                    <marquee><h1>${weather_des} || Minimum temperature : ${min_temp}&deg;C || Maximum temperature : ${mix_temp}&deg;C</h1></marquee>
                                </div>
                                <!-- weather details right box -->
                                <div class="col-md-6 weather-exp">
                                    <h4 class="text-center">Weather Details</h4>
                                    <div class="weather_details  mt-4">
                                        <p><i class="fa-solid fa-temperature-three-quarters"></i> Feels Like
                                            <span>${feelslike}&deg;C</span></p>
                                        <br>
                                        <p><i class="fa-solid fa-droplet"></i>&deg; Humidity <span>${humidity}%</span></p>
                                        <br>
                                        <p><i class="fa-solid fa-wind"></i> Wind <span>${wind} km/h</span></p>
                                        <br>
                                        <p> Pressure <span>${pressure} mb</span></p>
                                    </div>

                                </div>

                            </div>`
              
    
        // time function call
        getTime()
        // background change function call
        changeBackground(weathers)
    })

}