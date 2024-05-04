addLayer("Planet", {
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

        if(hasUpgrade('Planet',13)) mult = mult.times(1.15)
        if(hasUpgrade('Planet',14)) mult = mult.times(0.9)
        if(hasUpgrade('Planet',23)) mult = mult.times(1.35)

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
            description()  {
                if(!hasMilestone('Star', 0)) return "Start generation of Life"
                if(hasMilestone('Star', 0)) return "Start generating 20 Lives every second"
            },
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
            title: "Energy is near",
            description: "Life gain is STRONGER",
            cost: new Decimal (1000),
        },
     },

})

addLayer("Star", {
    name: "Star", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#CB2C14",
    requires: new Decimal(25000), // Can be a function that takes requirement increases into account
    resource: "Stars", // Name of prestige currency
    baseResource: "Planets", // Name of resource prestige is based on
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
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Star(s)", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    milestones: {
        0: {
            requirementDescription: "First Star",
            effectDescription: "Increases effects of the Planet layer",
            done() { return player.w.points.gte(1) },
        },
    },
    upgrades: {
        11: {
             title: "First Energy Source",
             description: "Gives Energy to Life",
             cost: new Decimal(1)
        }
    }

})