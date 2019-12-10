class PowerSavingUnit {
  constructor(active = true) {
    this.active = active
  }

  switchOff() {
    this.active = false;
  }

  switchOn() {
    this.active = true;
  }
}

module.exports = PowerSavingUnit;