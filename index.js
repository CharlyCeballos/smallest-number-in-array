const array = [3, 435, 7, 5, 324, 532, 2, 46, 57, 45, 98, 999, 4];

biggest = () => {
  const array2 = array;
  let biggestNumber = 0;
  array.forEach((first) => {
    array2.forEach((second) => {
      if (second > first) {
        biggestNumber = second;
      }
    });
  });
  console.log(`The biggest number is: ${biggestNumber}`);
};
biggest();

smallest = () => {
  const array2 = array;
  let smallestNumber = 0;
  array.forEach((first) => {
    smallestNumber = first;
    array2.forEach((second) => {
      if (second < smallestNumber) {
        smallestNumber = second;
      }
    });
  });
  console.log(`The smallest number is: ${smallestNumber}`);
};
smallest();