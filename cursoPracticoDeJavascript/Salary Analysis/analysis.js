//Helpers or Utils
const calcAverage = (list) => {
    const sumList = list.reduce((acumulatedValue = 0, newValue) => {
        return acumulatedValue + newValue;
    });
    const promedioLista = sumList / list.length
    return promedioLista
}

function isPar(number){return (number % 2 === 0);}

//Calculator of Median
function medianSalaries(list){
    const half = parseInt(list.length / 2);

    if(isPar(list.length)){
        const halfPerson1 = list[half - 1];
        const halfPerson2 = list[half];

        const median = calcAverage([halfPerson1,halfPerson2]);
        return median;
    }else{
        const halfPerson = list[half];
        return halfPerson;
    }
}

//General Median
const salariesMx = mexico.map((person) => {
    return person.salary;
});

const salariesSorted = salariesMx.sort((salaryA, salaryB) => {
    return salaryA - salaryB;
});


const medianGeneral = medianSalaries(salariesSorted);

//Median of Top 10%
const spliceStart = parseInt(salariesSorted.length * (90) / 100);
const spliceCount = salariesSorted.length - spliceStart;

const salariesTop10 = salariesSorted.splice(
    spliceStart,
    spliceCount,
);

const medianTop10 = medianSalaries(salariesTop10);

console.log({
    medianGeneral,
    medianTop10
});

