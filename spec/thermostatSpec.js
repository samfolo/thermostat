var Thermostat = require('../src/thermostat.js')

describe("Thermostat", () => {
  let testThermostat = new Thermostat;

  beforeEach(() => {
  });

  describe("Temperature", () => {
    it("has a minimum of 20 degrees", () => {
      expect(testThermostat.minumumTemperature).toEqual(10);
    });

    it("has a maximum of 25 degrees", () => {
      expect(testThermostat.maximumTemperature).toEqual(25)
    });

    it("can be increased", () => {
      testThermostat.increase(10)
      expect(testThermostat.currentTemperature).toEqual(30)
    });
  });
});
