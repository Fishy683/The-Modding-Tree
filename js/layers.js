addLayer("P", {
    name: "Planet", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Planets", // Name of prestige currency
    baseResource: "Life", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        if(hasUpgrade('P',13)) mult = mult.times(1.35)
        if(hasUpgrade('P',22)) mult = mult.times(1.1)
        if(hasUpgrade('P',24)) mult = mult.times(0.8)
            
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Planet(s)", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "The Start of All",
            description: "Start generation of Life",
            cost: new Decimal(0)
        },
        12: {
            title: "More Lives",
            description: "Life generation is now 5 per second",
            cost: new Decimal(5)
        },
        13: {
            title: "More Planets",
            description: "Planet gain formula is better",
            cost: new Decimal(15)
        },
        14: {
            title: "High Production Rates",
            description: "Double Life gain",
            cost: new Decimal(25)
        },
        21: {
            title: "Even MORE Life",
            description: "Multiply current life gain by 5",
            cost: new Decimal(50)
        },
        22: {
            title: "Exchange",
            description: "Decrease Life gain for a boost in the Planet formula",
            cost: new Decimal(75)
        },
        23:{
            title: "Many Planets",
            description: "Increase the Planet gain formula",
            cost: new Decimal(100)
        },
        24: {
            title: "Exchange 2",
            description: "Increase Life gain for a small decrease in the Planet formula",
            cost: new Decimal(150)
        }
    },
})
addLayer("E", {
    name: "Energy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFD500",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
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
        {key: "e", description: "E: Reset for Energy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

})
