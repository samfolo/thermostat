$(document).ready(function() {
  let thermostat = new Thermostat;

  const colorOf = (klass) => {
    if (klass === 'medium-usage') {
      return 'white'
    } else if (klass === 'low-usage') {
      return 'lightgreen'
    } else {
      return 'red'
    }
  };

  const powerSavingIsOn = () => {
    return thermostat.powerSavingStatus() === true ? 'ON' : 'OFF'
  };

  const usageCss = (klass) => {
    $( '#usage-status' ).css('color', colorOf(klass) );
  };

  const setDisplay = () => {
    $( "#temperature-in-degrees" ).text(`${thermostat.getCurrentTemperature()} °C`);
    $( "#usage-status" ).text(`${thermostat.energyUsage()}`);
    usageCss(thermostat.energyUsage());
    $( "#power-saving-status" ).text(`${powerSavingIsOn()}`);
  };

  const updateThermometer = () => {
    let height = (thermostat.getCurrentTemperature() - 11) * 3.85;

    if(thermostat.getCurrentTemperature() <= thermostat.getMaximumTemperature() && thermostat.getCurrentTemperature() > thermostat.getMinimumTemperature()) {
      $( '#thermometer-fill').css( 'height', `${height}%`)
    }
  };

  const updateColor = () => {
    let blue = 50 - (thermostat.getCurrentTemperature() - 10) * 10
    let red = ((thermostat.getCurrentTemperature() - 10) * 10) + 10
    let yellow = (80 - (thermostat.getCurrentTemperature() - 10) * 10) + 50
    $( '#thermometer-fill' ).css( 'background', `rgb(${red},${yellow},${blue})` )
    $( '#thermometer-base' ).css( 'background', `rgb(${red},${yellow},${blue})` )
  };

  setDisplay();
  updateColor();

  $( '#up-button').click(() => {
    thermostat.increase(1);
    updateThermometer();
    updateColor();
    setDisplay();
  });

  $( '#down-button').click(() => {
    thermostat.decrease(1);
    updateThermometer();
    updateColor();
    setDisplay();
  });

  $( '#reset-button').click(() => {
    thermostat.reset();
    updateThermometer();
    setDisplay();
    updateColor();
  });

  $( '#power-saving-button').click(() => {
    thermostat.togglePowerSaving();
    updateThermometer();
    setDisplay();
  });
});