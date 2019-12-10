var PowerSavingUnit = require('../src/powerSaving')

describe("PowerSavingUnit", () => {
  let testPSUnit = new PowerSavingUnit;

  beforeEach(() => {
    let testPSUnit = new PowerSavingUnit;
  });

  it("is on by default", () => {
    expect(testPSUnit.isActive()).toBeTrue();
  });

  it("can be turned off", () => {
    testPSUnit.switchOff();

    expect(testPSUnit.isActive()).toBeFalse();
  });

  it("can be turned on", () => {
    testPSUnit.switchOff();
    testPSUnit.switchOn();

    expect(testPSUnit.isActive()).toBeTrue();
  });
});
