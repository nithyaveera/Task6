class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius,
        this.color=color
    }
    getRadius() {
        return this.radius
    }
    setRadius(radius) {
        this.radius = radius
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color=color
    }
    toString() {
        return`circle[radius=${this.radius},color=${this.color}]`
    }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
    getCircumference() {
        return 2 * Math.PI * this.radius
        
    }

}

const mycircle = new Circle()

//Getting and Setting radius

console.log("radius:",mycircle.getRadius())

mycircle.setRadius(2.5)

console.log("newradius:",mycircle.getRadius())

//Getting and Setting color
console.log("color:", mycircle.getColor())

mycircle.setColor("white")

console.log("newcolor:",mycircle.getColor())

//Using toString method

console.log(mycircle.toString())

//Getting area and circumference

console.log("Area:",mycircle.getArea())

console.log("circumference:",mycircle.getCircumference())