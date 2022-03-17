var cars = [];
var brands = ["Mazda","Toyota","Acura","Alfa-Romeo","Tesla","BMW"];
var model = ["Model X", "Model Y", "Corolla", "Veyron", "Speed", "Doom", "Velocity"]

var newCar = new car("Toyota","Corolla","2020");
newCar

var randomNumber = function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

for(var i = 0; i < 30; i++){
    var rng = randomNumber(2000,2020);
    
    var rng_brand = randomNumber(0,6)

    var rng_model = randomNumber(0,7)

    var cars = new car(brands[rng_brand], model[rng_model], rng);   
}

console.log(cars);