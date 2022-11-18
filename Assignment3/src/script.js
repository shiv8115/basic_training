// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  let n = array.length;
  let largest = 0,
    ans = -1;
  for (let i = 1; i < n; i++) {
    if (array[i] > array[largest]) {
      ans = largest;
      largest = i;
    } else if (array[i] < array[largest]) {
      if (ans === -1 || array[i] > array[ans]) ans = i;
    }
  }
  return array[ans];
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  let n = string.length;
  let freqArray = new Array(26);
  for (let i = 0; i < 26; i++) {
    freqArray[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    if (string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122)
      freqArray[string[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  const ans = {};
  for (let i = 0; i < n; i++) {
    if (
      string[i] == " " ||
      string[i].charCodeAt(0) < 97 ||
      string[i].charCodeAt(0) > 122
    )
      continue;
    if (freqArray[string[i].charCodeAt(0) - "a".charCodeAt(0)] != 0) {
      ans[string[i]] = freqArray[string[i].charCodeAt(0) - "a".charCodeAt(0)];
      freqArray[string[i].charCodeAt(0) - "a".charCodeAt(0)] = 0;
    }
  }
  return ans;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function fun(obj, parent, res = {}) {
  for (let key in obj) {
    let propName = parent ? parent + "." + key : key;
    if (typeof obj[key] == "object") {
      fun(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

function flatten(unflatObject) {
  // Write your code here
  return fun(unflatObject);
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format

function unflatten(flatObject) {
  // Write your code here
 
}
