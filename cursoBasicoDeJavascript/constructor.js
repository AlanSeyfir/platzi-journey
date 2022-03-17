var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: "2020",
    detailsOfCar: function(){
        console.log(`Car ${this.model} ${this.year} ${this.detailsOfCar}`);
    }
}

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car("Tesla", "Model 3", "2020");
var newCar2 = new car("Tesla", "Model X", "2018");
var newCar3 = new car("Toyota", "Corolla", "2020");

newCar
newCar2
newCar3

