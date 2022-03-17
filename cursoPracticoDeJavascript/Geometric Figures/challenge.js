/*
    Durante este taller aprendimos a calcular el área y perímetro de un triángulo conociendo la longitud de sus 3 lados y también su altura.

    En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

    La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
    La función debe retornar la altura del triángulo.
    Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

function test(side1,side2,side3){
    if(side1 == side2 || side1 == side3 || side2 == side3){
        console.log("Is an Isoceles Traingle");
    }else{
        console.log("Is not a Isoceles Traingle");
    }
}
test(2,1,1)

function calcHeightIsocelesTraingle(base, height){
    let equation = (base * height) / 2;
    return console.log(equation.toFixed(2));
}
calcHeightIsocelesTraingle(3,5)

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return console.log(trianguloGrandeAltura.toFixed(2));
    }
}

alturaTrianguloIsosceles(1,1,1)