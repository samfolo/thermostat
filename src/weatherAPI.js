$(document).ready(function() {
  const apiKey = `865ee96fec04e5d48d5c974486338e77`
  
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`, (data) => {
    let temp = `${(data.main.temp - 273.15).toFixed(0)} °C`;
    $( '#api-ui' ).text ( temp );
  });


});