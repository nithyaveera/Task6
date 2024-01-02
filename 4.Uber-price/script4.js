//write class to calculate uber price

class Uberprice {
    constructor(basePrice, costPerMinute, costPerMile) {
        this.basePrice = basePrice,
        this.costPerMinute = costPerMinute,
        this.costPerMile=costPerMile
    }
    calculatePrice(distance, time) {
        return this.basePrice + (this.costPerMinute * time) +(this.costPerMile * distance)
    }
}

const price = new Uberprice(5, 0.5, 1.2)

console.log(price.calculatePrice(10,15))