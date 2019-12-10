var Thermostat = require('../src/thermostat.js')

describe("Thermostat", () => {
  let testThermostat;

  beforeEach(() => {
    testThermostat = new Thermostat;
  });

  describe("Temperature", () => {
    it("has a minimum of 20 degrees", () => {
      expect(testThermostat.minimumTemperature).toEqual(10);
    });

    it("has a maximum of 25 degrees", () => {
      expect(testThermostat.maximumTemperature).toEqual(25)
    });

    describe(".increase", () => {
      it("can be increased by 10", () => {
        testThermostat.increase(5)

        expect(testThermostat.currentTemperature).toEqual(25)
      });

      it("can be increased by 8", () => {
        testThermostat.increase(3)

        expect(testThermostat.currentTemperature).toEqual(23)
      });

      it("cannot be increased more than maximum temperature", () => {
        expect(() => { testThermostat.increase(6) }).toThrow("Cannot exceed maximum temperature");
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

      it("cannot be decreased more than minimum temperature", () => {
        expect(() => { testThermostat.decrease(11) }).toThrow("Cannot go lower than minimum temperature");
      });
    });

    describe(".reset", () => {
      it("sets the thermostat back to 20", () => {
        testThermostat.increase(3);
        testThermostat.reset();

        expect(testThermostat.currentTemperature).toBe(20);
      })
    })
  });
});
