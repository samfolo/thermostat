class PowerSavingUnit {
  constructor(active = true) {
    this.active = active
  }

  isActive() {
    return this.active
  }

  switchOff() {
    this.active = false;
  }

  switchOn() {
    this.active = true;
  }
}

// module.exports = PowerSavingUnit;
