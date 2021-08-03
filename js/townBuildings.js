/*
* Contains object definitions for Town Buildings. 
* Provides container object to allow easy tracking of new buildings
* and automates some linking of new buildings to game logic. 
*/

var o_townBuildingsContainer = {

o_woodenHut: {
    name: "Wooden Hut",
    count: 0,
    costOfNextBuilding: 100000000001,
    costGrowthFactor: 1.01,
    role: ["Housing"],

    handleClick: function() {
        if(gameData.coins >= this.costOfNextBuilding) {
            gameData.coins -= this.costOfNextBuilding;
            this.count++;
            this.costOfNextBuilding *= this.costGrowthFactor;
        }
    },
},

o_farm: {
    name: "Farm",
    count: 0,
    costOfNextBuilding: 1000000000001,
    costGrowthFactor: 1.05,
    role: ["Food", "Income", "Prestige", "Nobility xp"],
    xpMultiplier: 1.10,
    income: 150, //1s 50c

    handleClick: function() {
        if(gameData.coins >= this.costOfNextBuilding) {
            gameData.coins -= this.costOfNextBuilding;
            this.count++;
            this.costOfNextBuilding *= this.costGrowthFactor;
        }
    },

    getExperienceMultiplier: function() {
        return this.count * this.xpMultiplier;
    },

    getIncome: function() {
        return this.income * this.count;
    },
},

} // container