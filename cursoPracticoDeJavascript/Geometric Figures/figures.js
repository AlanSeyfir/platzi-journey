//console.log("Hello dad 😎");

//Code of Square
console.group('Squares')
    // const sideSquare = 5;
    // console.log(`Sides of my square is ${sideSquare} cm`);

    function perimeterSquare(side){
        return side * 4;
    };
    perimeterSquare();
    // console.log(`Perimeter of my square is ${perimeterSquare}`);

    function areaSquare(side){
        return side * side
    }
    areaSquare()
    // const areaSquare = sideSquare * sideSquare;
    // console.log(`Area of my square is ${areaSquare} cm^2`);
console.groupEnd()

//Code of Triangle
console.group('Triangle')
    const sideTraingle1 = 6;
    const sideTraingle2 = 6;
    const baseTraingle = 4;
    console.log(
        "Sides of the triangle: " + 
        sideTraingle1 + " cm," +
        sideTraingle2 + " cm," +
        baseTraingle + " cm"
    );

    const heightTriangle = 5.5;
    console.log("Height of the Triangle is: " + heightTriangle);
    
    function perimeterTraingle(side1, side2, base){
        return side1 + side2 + base;
    }
    // const perimeterTraingle = sideTraingle1 + sideTraingle2 + baseTraingle;
    console.log("Perimeter of the Triangle is: " + perimeterTraingle + " cm");

    // const areaTriangle = (baseTraingle * heightTriangle) / 2;   
    console.log("Area of my square is " + areaTriangle + " cm^2");
    function areaTriangle(base, height){
        return (base * height) / 2;
    }
console.groupEnd()

console.group('Circles');
    //Radio
    const radioCircle = 4
    // console.log("The radious of a circle: " + radioCircle + " cm");

    //Diameter
    function diameterCircle(radio){
        return radio * 2;
    }

    // const diameterCircle = radioCircle * 2;
    // console.log("The diameter of a circle: " + diameterCircle + " cm");

    //PI
    const PI = Math.PI;
    // console.log("PI is: " + PI);

    //Circumference
    function perimeterCircle(radio){
        const diameter = diameterCircle(radio);
        return diameter * PI;
    }
    // const perimeterCircle = diameterCircle * PI;
    // console.log("The perimeter of a circle: " + perimeterCircle + " cm");

    //Area
    // const areaCircle = (radioCircle * radioCircle) * PI;
    function areaCircle(radio){
        return (radio * radio) * PI;
    }
    // console.log("The area of a circle: " + areaCircle.toFixed(3) + " cm");

console.groupEnd();

function calcPerimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
}

function calcAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area = areaSquare(value);
    alert(area);
}



