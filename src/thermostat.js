class Thermostat {
  constructor(minimumTemperature = 10, maximumTemperature = 25, currentTemperature = 20) {
    this.minimumTemperature = minimumTemperature;
    this.maximumTemperature = maximumTemperature;
    this.currentTemperature = currentTemperature;
  }

  increase(num) {
    if (this.currentTemperature + num > this.maximumTemperature) {
      throw "Cannot exceed maximum temperature";
    } else {
      this.currentTemperature += num;
    };
  }

  decrease(num) {
    if (this.currentTemperature - num < this.minimumTemperature) {
      throw "Cannot go lower than minimum temperature";
    } else {
      this.currentTemperature -= num;
    }
  }

  reset() {
    let defaultTemperature = 20;

    this.currentTemperature = defaultTemperature;
  }
}

module.exports = Thermostat;
