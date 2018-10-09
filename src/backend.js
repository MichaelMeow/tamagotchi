// Backend Logic

export let tamagotchi = {

  hungerArray: ["█","█","█","█","█","█","█","█","█","█"],
  playArray: ["█","█","█","█","█","█","█","█","█","█"],
  sleepArray: ["█","█","█","█","█","█","█","█","█","█"],

  blockSet: function(level1, level2, level3) {
    return function (bartype1, bartype2, bartype3){
      let level = Math.min((bartype1.length + level1), 10);
      bartype1.length = 0;

      for (var i = 0; i < level; i++) {
        bartype1.push("█");
      }
      if (bartype2){
        level = Math.min((bartype2.length + level2), 10);
        bartype2.length = 0;
        for (var j = 0; j < level; j++) {
          bartype2.push("█");
        }
      }
      if (bartype3) {
        level = Math.min((bartype3.length + level3), 10);
        bartype3.length = 0;
        for (var k = 0; k < level; k++) {
          bartype3.push("█");
        }
      }
    };
  },

  setHunger() {
    setInterval(() =>{
      this.hungerArray.pop();
    }, 10000);
  },
  setPlay() {
    setInterval(() =>{
      this.playArray.pop();
    }, 7000);
  },
  setSleep() {
    setInterval(() =>{
      this.sleepArray.pop();
    }, 50000);
  }

};

  // tamagotchi.downside = tamagotchi.blockSet(10,-3)
  // tamagotchi.interupted = tamagotchi.blockSet(4)
  // tamagotchi.small = tamagotchi.blockSet(4)
  // tamagotchi.combo = tamagotchi.blockSet(2,2)
  // tamagotchi.wierd = tamagotchi.blockSet(random, random, random)
  // tamagotchi.full = tamagotchi.blockSet(random, random, random)

  // Functions we can call:
  // tamagotchi.full(tamagotchi.hungerArray);
  // tamagotchi.full(tamagotchi.sleepArray)
  // tamagotchi.full(tamagotchi.playArray)
  // tamagotchi.interupted(tamagotchi.hungerArray)
  // tamagotchi.interupted(tamagotchi.sleepArray)
  // tamagotchi.interupted(tamagotchi.playArray)
  // milkshake = tamagotchi.downside(tamagotchi.hungerArray, tamagotchi.sleepArray)
