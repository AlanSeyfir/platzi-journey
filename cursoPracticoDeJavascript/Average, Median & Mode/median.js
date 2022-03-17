const list1 = [100, 200, 500, 4000000];

const middleList = parseInt(list1.length / 2);

function calculateAverage(list) {
  const sumList = list.reduce((acumulatedValue = 0, newElement) => {
    return acumulatedValue + newElement;
  });
  const averageList1 = sumList / list.length;
  return averageList1;
}

function isPar(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let median;

function isMedian(list) {
  const sortList1 = list.sort((a, b) => a - b);
  if (isPar(list.length)) {
    const element1 = list[middleList - 1];
    const element2 = list[middleList];

    const averageElement1And2 = calculateAverage([element1, element2]);

    median = averageElement1And2;
  } else {
    median = list[middleList];
  }
}
isMedian([1, 2, 3, 222222]);
