var Thermostat = require('../src/thermostat.js')

describe("Thermostat", () => {
  let testThermostat;

  beforeEach(() => {
    testThermostat = new Thermostat;
  });

  describe("PowerSaving", () => {
    it("can be toggled off", () => {
      testThermostat.togglePowerSaving()
      expect(testThermostat.powerSavingStatus()).toEqual(false)
    });

    it("can be toggled on", () => {
      testThermostat.togglePowerSaving()
      testThermostat.togglePowerSaving()
      expect(testThermostat.powerSavingStatus()).toEqual(true)
    });
  });

  describe("Temperature", () => {
    describe("Maximum", () => {
      it("has a maximum of 25 when power saving is on", () => {
        expect(testThermostat.getMaximumTemperature()).toEqual(25)
      });

      it("has a maximum of 32 when power saving is off", () => {
        testThermostat.togglePowerSaving()

        expect(() => {testThermostat.increase(10)}).not.toThrowError()
      })
    });

    it("has a minimum of 20", () => {
      expect(testThermostat.getMinimumTemperature()).toEqual(10);
    });

    describe(".increase", () => {
      it("can be increased by 10", () => {
        testThermostat.increase(5)

        expect(testThermostat.getCurrentTemperature()).toEqual(25)
      });

      it("can be increased by 8", () => {
        testThermostat.increase(3)

        expect(testThermostat.getCurrentTemperature()).toEqual(23)
      });

      it("cannot be increased more than maximum temperature", () => {
        expect(() => { testThermostat.increase(6) }).toThrow("Cannot exceed maximum temperature");
      });
    });

    describe(".decrease", () => {
      it("can be descreased by 5", () => {
        testThermostat.decrease(5)

        expect(testThermostat.getCurrentTemperature()).toEqual(15)
      });

      it("can be descreased by 9", () => {
        testThermostat.decrease(9)

        expect(testThermostat.getCurrentTemperature()).toEqual(11)
      });

      it("cannot be decreased more than minimum temperature", () => {
        expect(() => { testThermostat.decrease(11) }).toThrow("Cannot go lower than minimum temperature");
      });

      describe("#togglePowerSaving", () => {
        describe("when called and temperature is above 25", () => {
          it("brings the value back down to 25", () => {
            testThermostat.togglePowerSaving();
            testThermostat.increase(12);
            testThermostat.togglePowerSaving();

            expect(testThermostat.getCurrentTemperature()).toBe(25);
          })
        })
      });
    });

    describe(".reset", () => {
      it("sets the thermostat back to 20", () => {
        testThermostat.increase(3);
        testThermostat.reset();

        expect(testThermostat.getCurrentTemperature()).toBe(20);
      })
    })
  });

  describe("energy usage", () => {
    it("should return 'low-usage' when temperature is less than 18", () => {
      testThermostat.decrease(5);
      expect(testThermostat.energyUsage()).toEqual("low-usage");
    })

    it("should return 'medium-usage' when temperature is less than 25", () => {
      expect(testThermostat.energyUsage()).toEqual("medium-usage");
    })

    it("should return 'high-usage' when temperature is 25 or more", () => {
      testThermostat.togglePowerSaving();

      testThermostat.increase(7);
      expect(testThermostat.energyUsage()).toEqual("high-usage");
    })
  });
});
