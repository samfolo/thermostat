var Thermostat = require('../src/thermostat.js')

describe("Thermostat", () => {
  let testThermostat = new Thermostat;

  beforeEach(() => {
    testThermostat = new Thermostat;
  });

  describe("Temperature", () => {
    it("has a minimum of 20 degrees", () => {
      expect(testThermostat.minumumTemperature).toEqual(10);
    });

    it("has a maximum of 25 degrees", () => {
      expect(testThermostat.maximumTemperature).toEqual(25)
    });
    
    describe(".increase", () => {
      it("can be increased by 10", () => {
        testThermostat.increase(10)
  
        expect(testThermostat.currentTemperature).toEqual(30)
      });

      it("can be increased by 8", () => {
        testThermostat.increase(8)
  
        expect(testThermostat.currentTemperature).toEqual(28)
      });
    });

    describe(".decrease", () => {
      it("can be descreased by 5", () => {
        testThermostat.decrease(5)
  
        expect(testThermostat.currentTemperature).toEqual(15)
      });

      it("can be descreased by 9", () => {
        testThermostat.decrease(9)
  
        expect(testThermostat.currentTemperature).toEqual(11)
      });
    });
  });
});
