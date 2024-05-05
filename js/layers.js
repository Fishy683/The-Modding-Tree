addLayer("P", {
    name: "Planet", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Planets", // Name of prestige currency
    baseResource: "Life", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        if(hasUpgrade('P',13)) mult = mult.times(1.15)
        if(hasUpgrade('P',14)) mult = mult.times(0.9)
        if(hasUpgrade('P',23)) mult = mult.times(1.35)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for planet(s)", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
     upgrades:{
        11: {
            title: "The Start of All",
            description: "Start generation of Life",
            cost: new Decimal(0),
        },
        12: {
            title: "Rapid Growth",
            description: "Double Life gain",
            cost: new Decimal(5),
        },
        13: {
            title: "Increasing Life",
            description: "Planet gain formula is better",
            cost: new Decimal(10),
        },
        14: {
            title: "Exchange",
            description: "Increase Life gain, but decrease the previous upgrade's effect",
            cost: new Decimal(20),
        },
        21:{
            title: "Life Strikes Again",
            description: "Increase Life gain",
            cost: new Decimal(100),
        },
        22:{
            title: "Born Rates Increase",
            description: "Give a small boost to Life gain",
            cost: new Decimal(200),
        },
        23:{
            title: "Global Pandemic",
            description: "Decrease Life gain for a boost",
            cost: new Decimal(250),
        },
        24:{
            title: "Too Many Life",
            description: "Life gain is STRONGER",
            cost: new Decimal (1000),
        },
     },

}),

addLayer("E", {
    name: "Energy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFD500",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Energy", // Name of prestige currency
    baseResource: "Life", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for energy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})