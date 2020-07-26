function refresh(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            var lat = position.coords.latitude
            var lng = position.coords.longitude
            const proxy = `https://cors-anywhere.herokuapp.com/`
            const url =   `${proxy}http://api.weatherstack.com/current?access_key=48d1fa0a786daf92e44a514a04759b1d&query=${lat},${lng}`
        
            function callback(data){
                console.log(data)
                $(".country").html(data.location.timezone_id);
                $(".country").append(`
                    <img src="${data.current.weather_icons[0]}" class="img-fluid"></img>
                `)
                $(".temperature").html(data.current.temperature + "°C")
                $(".description").html(data.current.weather_descriptions)
                $("button").click((e)=>{
                    let input = e.target
                    input.disabled = true
                    isVisible = false
                    let visibility = isVisible ? "hidden" : "visible"
                    $(".more").css("visibility", visibility)
                    $(".more").append(`
                        <table class="table">
                                <tr>
                                    <th >Humidity</th>
                                    <th>${data.current.humidity}</th>
                                </tr>
                                <tr>
                                    <th >Observational Time</th>
                                    <th>${data.current.observation_time}</th>
                                </tr>
                                <tr>
                                    <th >Wind Speed</th>
                                    <th>${data.current.wind_speed}</th>
                                </tr>
                                <tr>
                                    <th >Wind Direction</th>
                                    <th>${data.current.wind_dir}</th>
                                </tr>
                            <tbody>
                            </tbody>
                        </table>
        
        
                    `)
                })
        
        
        
            }
            $.getJSON(url,callback)
        })

    }else{
        alert("Geolocation doesnt work")
    }

}

