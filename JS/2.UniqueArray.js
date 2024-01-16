/**
 * @param {Array} array
 * @return {Array}
 */
function uniqueArray(array) {
  //   return Array.from(new Set(array));
  /**
   * O(n2)
   */
  //   const result = [];
  //   for (let ele of array) {
  //     if (result.includes(ele)) continue;
  //     else result.push(ele);
  //   }
  //   console.log(result);

  //O(n) implementation
  const result = [];
  const resultSet = new Set();
  for (let ele of array) {
    if (resultSet.has(ele)) continue;
    else {
      result.push(ele);
      resultSet.add(ele);
    }
  }
  return result;
}

console.log(uniqueArray([1, 2, 3]));
console.log(uniqueArray([1, 1, 3]));
console.log(uniqueArray([2, 1, 2, true, true]));
