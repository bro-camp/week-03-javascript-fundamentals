function isSumEven(array) {
  const sum = array.reduce((prev, curr) => prev + curr, 0);
  return !(sum % 2);
}

function myFilter(myArray, callback) {
  callback(myArray);
  return myArray.reduce((prev, curr) => prev + curr, 0);
}

function test() {
  const arr = [1, 2, 3, 4, 5];
  console.log(myFilter(arr, isSumEven));
  console.log('\n\n');
}

test();
