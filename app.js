const apiKey = "8d86be893d2f42a188d131751260905";
 // Replace with your OpenWeatherMap API key
const cursur = document.getElementById("cursur");
cursur.style.display = "none";

const getWeather = async () => {
      document.getElementById("cursur").style.display = "block";

    let inputCity = document.getElementById("cityInput").value;

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity}`;
    
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        if (inputCity === "") {
            swal.fire({
                icon: "warning",
                title: "Please enter a city name",
                text: "City name cannot be empty",
                confirmButtonText: "OK"
                
            }
            
        );
        cursur.style.display = "none";return;
        }
// 
        if (response.status === 200) {
            swal.fire({
                icon: "success",
                title: "City found",
                text: `Weather data for ${inputCity} retrieved successfully`,
                confirmButtonText: "OK"
            });
        }
        if (response.status === 400) {
            swal.fire({
                icon: "error",
                title: "City not found",
                text: "Please enter a valid city name",
                confirmButtonText: "OK"
            });
        }
        // document.getElementById("cursur").style.display = "block";

    
    //  catch (error) {
        // console.error("Error fetching weather data:", error);
        // swal.fire({
            // icon: "error",
            // title: "Error",
            // text: "An error occurred while fetching weather data",
            // confirmButtonText: "OK"
        // }); return

        const city = document.getElementById("cityInput").value; 
        document.querySelector(".card").style.transform = "rotateY(180deg)";
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });


    document.getElementById("temp").innerHTML =
    data.current.temp + "°C";


    document.getElementById("city").innerHTML =
    data.location.name;

    document.getElementById("condition").innerHTML =
    data.current.condition.text;

    document.getElementById("humidity").innerHTML =
    data.current.humidity + "%";

    document.getElementById("wind").innerHTML =
    data.current.wind_kph + " km/h";


  
    }
  


  function flipCard() {
      document.querySelector(".card").style.transform = "rotateY(0deg)";
      cursur.style.display = "none";
  }
// flipCard();