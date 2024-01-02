//write "person" class to hold all details

class Person{
    constructor(firstName, lastName, age, email, mobileNumber, place, education) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email,
            this.mobileNumber = mobileNumber,
            this.place = place,
            this.education= education
    }

}

const person1 = new Person("Nithya", "Veeramani", 20, "nithyaveeramani2003@gmail.com", 9344502117, "Komarapalayam", "B.com")

console.log(person1)