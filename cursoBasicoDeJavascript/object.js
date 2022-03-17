var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: "2020",
    detailsOfCar: function(){
        console.log(`Car ${this.brand} ${this.year}`);
    }
};

myCar.detailsOfCar()

console.log(myCar.year)
//console.log(myCar);