var Thermostat = require('../src/thermostat.js')

describe("Thermostat", () => {
  let testThermostat = new Thermostat;

  beforeEach(() => {
  });

  it("has a minimum temperature of 20 degrees", () => {
    expect(testThermostat.minumumTemperature).toEqual(20);
  });
})