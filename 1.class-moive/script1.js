//write "Moive" class and give property title,studio,rating

class Moive{
    constructor(title, studio, rating = "PG") {
        this.title = title,
        this.studio = studio,
        this.rating = rating 
    }
    static getPG(moives) {
        let arr = []
        for (let i = 0; i < moives.length; i++){
            if (moives[i].rating == "PG") {
                arr.push(moives[i])
            }
        }
        return arr
    }
}

const moives = [
    new Moive("kushi", "GOLD film studio", "PG"),
    new Moive("Ghilli", "AVM studio", "R"),
    new Moive("kaithi", "VVV studio", "PG"),
    new Moive("vikram","VFX studio","PG-13")
]
let pgRatingMoive = Moive.getPG(moives)

console.log("PG-rated moives:")

for (let i = 0; i < pgRatingMoive.length; i++){
    let moive=pgRatingMoive[i]
    console.log(`${moive.title} - ${moive.studio} - ${moive.rating}`)
}

const casinoRoyale = new Moive("Casino Royale", "Eon Productions", "PG-13")

console.log(casinoRoyale)