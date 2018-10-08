import { tamagotchi } from "./../src/backend.js";

describe("tamagotchi", function() {

    beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it("is hunger array 10", function() {
    // tamagotchi.full = tamagotchi.blockSet(10);
    // tamagotchi.full(tamagotchi.hungerArray);

    expect(tamagotchi.hungerArray.length).toEqual(10);
  });

  it("is hunger bar decreasing by one every second", function(){
    tamagotchi.setHunger();
    jasmine.clock().tick(3001);
    expect(tamagotchi.hungerArray.length).toEqual(7)
  })

  it("is milkshake function returning hunger array 10 and sleep array -3", function() {
    tamagotchi.downside = tamagotchi.blockSet(10,-3)
    tamagotchi.downside(tamagotchi.hungerArray, tamagotchi.sleepArray)
    expect(tamagotchi.hungerArray.length).toEqual(10)
    expect(tamagotchi.sleepArray.length).toEqual(7)
  })

});
