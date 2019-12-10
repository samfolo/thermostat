var PowerSavingUnit = require('./powerSaving')

class Thermostat {
  constructor(minimumTemperature = 10, maximumTemperature = 25, currentTemperature = 20, powerSaving = new PowerSavingUnit) {
    this.powerSaving = powerSaving
    this.minimumTemperature = minimumTemperature;
    this.maximumTemperature = maximumTemperature;
    this.currentTemperature = currentTemperature;
  }

  getCurrentTemperature() {
    return this.currentTemperature;
  }

  getMaximumTemperature() {
    return this.maximumTemperature
  }

  getMinimumTemperature() {
    return this.minimumTemperature
  }

  powerSavingStatus() {
    return this.powerSaving.isActive()
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

  togglePowerSaving() {
    if (this.powerSaving.active) {
      this.powerSaving.active = false;
      this.maximumTemperature = 32;
    } else {
      this.powerSaving.active = true;
      this.maximumTemperature = 25;
    }
  }

  energyUsage() {

    let lowUsageNums = [];
    let mediumUsageNums = [];

    [...Array(32).keys()].forEach(num => {
      if (num < 18) {
        lowUsageNums.push(num)
      } else if (num < 25) {
        mediumUsageNums.push(num)
      }
    })


    if (lowUsageNums.includes(this.currentTemperature)) {
      return "low-usage"
    } else if (mediumUsageNums.includes(this.currentTemperature)) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }
}

module.exports = Thermostat;
