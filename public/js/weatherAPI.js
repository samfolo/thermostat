$(document).ready(function() {
  const apiKey = `865ee96fec04e5d48d5c974486338e77`
  
  const apiCall = (location) => {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=${apiKey}`, (data) => {
      let temp = `${(data.main.temp - 273.15).toFixed(0)}°C`;
      let windSpeed = data.wind.speed
      let forecast = data.weather[0].description
      $( '#current-city-temp' ).text ( forecast );
      console.log(data)
      $( '#api-wind-speed' ).text( windSpeed )
      $( '#api-wind-speed-ms' ).text( 'm/s' )
      $( '#api-forecast' ).text( temp )
    });
  };

  $( '#city' ).change((event) => {
    event.preventDefault()
    const city = $( '#city' ).val();
    apiCall(city);
  });

  const city = $( '#city' ).val();
  apiCall(city);

  
});