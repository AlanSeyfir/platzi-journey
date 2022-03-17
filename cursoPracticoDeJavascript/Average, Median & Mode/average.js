const list1 = [
    100,
    200,
    300,
    500,
];

function calculateAverage(list){
    // let sumList = 0;
    
    // for(let i = 0; i < list.length; i++){
    //     sumList = sumList + list[i];
    // }
    
    const sumList = list.reduce(
        (acumulatedValue = 0, newElement) => {
            return acumulatedValue + newElement;
        }
    );

    const averageList1 = sumList / list.length;
    return averageList1;
}