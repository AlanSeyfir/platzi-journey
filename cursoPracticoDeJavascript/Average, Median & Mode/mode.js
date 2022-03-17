const list1 = [1, 1, 2, 3, 3, 4, 3, 2, 1, 1, 1, 2, 3];

const list1Count = {};

function foundMode(list1) {
  list1.map((element) => {
    if (list1Count[element]) {
      list1Count[element] += 1;
    } else {
      list1Count[element] = 1;
    }
  });

  const list1Arr = Object.entries(list1Count).sort(
    (acumulatedValue, newValue) => {
      return acumulatedValue - newValue;
    }
  );
  console.log(list1Arr);

  return list1Arr[list1Arr.length - 1];
}
foundMode([1, 1, 2, 3, 3, 4, 3, 2, 1, 1, 1, 2, 3]);
