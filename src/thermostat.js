class Thermostat {
  constructor(minumumTemperature = 10, maximumTemperature = 25, currentTemperature = 20) {
    this.minumumTemperature = minumumTemperature;
    this.maximumTemperature = maximumTemperature;
    this.currentTemperature = currentTemperature;
  }

  increase(num) {
    this.currentTemperature += num
  }
}

module.exports = Thermostat;
