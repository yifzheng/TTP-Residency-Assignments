// forEach()
const arr1 = [1,2,3,4,5];
function myForEach(arr, callback) {
    for (element of arr){
        callback(element);
    }
}
console.log("The forEach() function")
myForEach(arr1, (num) => {console.log(num)})

// map()
const arr2 = [1,2,3,4,5];
function myMap(arr, callback){
    const array = [];
    for (x of arr){
        array.push(callback(x));
    }
    return array;
}
let newArr = myMap(arr2, num => {return num * 2})
console.log("The map() function")
console.log(newArr);

// filter()
const arr3 = [1,2,3,4,5];
function myFilter(arr, callback){
    const array = [];
    for (x of arr){
        if (callback(x))
            array.push(callback(x));
    }
    return array;
}
let newArr1 = myFilter(arr3, (num) => {
    if (num % 2 == 0)
         return num
})
console.log("The filter() function")
console.log(newArr1)

// some()
const arr4 = [1,2,3,4,5];
function mySome(arr, callback){
    for (x of arr){
        if (callback(x)){
            return true;
        }
    }
    return false;
}
const even = (element) => element % 2 === 0
console.log("the some() function")
console.log(mySome(arr4, even))

// every();
const arr5 = [1,2,3,4,5];
function myEvery(arr, callback){
    for (x of arr){
        if (!callback(x))
            return false;
    }
    return true;
}

let bool = myEvery(arr5, num => {
    if (num < 40){
        return true;
    }
})
console.log("The every() function")
console.log(bool)

// reduce()
const arr6 = [1,2,3,4,5];
function myReduce(arr, callback, val){
    let accumulator = 0;
    if (typeof val !== 'undefined'){
        accumulator = val
        for (let i = 0; i < arr.length; i++){
            accumulator = callback(accumulator, arr[i])
        }
    }
    else{
        accumulator = arr[0];
        for (let j = 1; j < arr.length; j++){
            accumulator = callback(accumulator, arr[j]);
        }
    }
    return accumulator
}
let num = myReduce(arr6, (accumulator, currentValue) => accumulator + currentValue, 11)
console.log("The reduce() function")
console.log("Sum of reduced array " + num)

// includes()
const arr7 = [1,2,3,4,5];
function myIncludes(arr, callback, value){
    for (x of arr){
        if (callback(x, value)){
            return true;
        }
    }
    return false;
}
function include(value, compare){
    if (value === compare){
        return true;
    }
}
let result = myIncludes(arr7, include, "hello")
console.log("The includes() function")
console.log(result)

// indexOf()
const arr8 = [1,2,3,4,5];
function myIndexOf(arr, callback, value){
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], value, i)){
            return i;
        }
    }
    return -1;
}
function compare(currentVal, temp, index){
    if (currentVal === temp){
        return index;
    }
}
let index1 = myIndexOf(arr8, compare, "hello")
console.log("The indexOf() function")
console.log(index1)

// push()
const arr9 = [1,2,3,4,5];
function myPush(arr, callback, val){
    return callback(arr, val);
}
function push(arr, value){
    arr[arr.length] = value;
    return arr.length;
}
let number = myPush(arr9, push, 6)
console.log("The push() function")
console.log(number)
console.log(arr9)

// lastIndexOf()
const arrX = [1,2,3,4,5];
function myLastIndexOf(arr, callback, value, fromIndex){
    let index = -1;
    if (typeof fromIndex == 'undefined')
        fromIndex = arr.length - 1;
    for (let i = fromIndex; i > -1; i--){
        index = callback(arr[i], value, i)
    }
    return index;
}
function compareVal(currentVal, value, index){
    if (currentVal === value){
        return index;
    }
}
let index2 = myLastIndexOf(arrX, compareVal, 1, 3)
console.log("The lastIndexOf() function")
console.log(index2);

let object = {
    name: "yifeng",
    age: 19,
    height: 178,
    weight: 165
}

// Object.keys()
function grabKeys(obj){
    let objectKeys = []
    for (x in obj){
        objectKeys.push(x)
    }
    return objectKeys
}
let keysArr = grabKeys(object)
console.log("The Object.keys() function")
console.log(keysArr)

// Object.values()
function grabValues(obj){
    let objectValues = []
    for (x in obj){
        objectValues.push(obj[x])
    }
    return objectValues
}
let valuesArr = grabValues(object)
console.log("The Object.values() function")
console.log(valuesArr)

// sumOfRange()
function range(start, end, step){
    let array = [];
    if (typeof step === 'undefined' || step === 0){
        step = 1;
        for (let i = start; i <= end; i += step){
            array.push(i);
        }
    }
    else if (end > start && step < 0){
        for (let i = start; i <= end; i ++){
            array.push(i);
        }
    }
    else if (step > 1){
        for (let i = start; i <= end; i += step){
            array.push(i);
        }
    }
    else if (end < start){
        for (let i = start; i >= end; i-- ){
            array.push(i);
        }
    }
    else if (step < 0){
        for (let i = start; i >= end; i += step ){
            array.push(i);
        }
    }
    return array;
}
function sumOfRange(arr){
    let sum = 0; 
    for (x of arr){
        sum += x;
    }
    return sum;
}
let sum = sumOfRange(range(1,10,-1))
console.log(range(5,2,-1))
console.log(sum)

// reversing an array
function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
function reverseArrayInPlace(arr) {
    if (arr.length % 2 == 0) {
        let start = 0
        let end = arr.length - 1
        while (end > start) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    else {
        let start = 0
        let end = arr.length - 1
        while (start != end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }

}
console.log(reverseArray(['A', 'B', 'C', 'D', 'E']))
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

// A list
function arrayToList(array){
    let list = null;
    for (let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest : list}
    }
    return list;
}
function listToArray(list){
    let array = []
    for (let node = list; node; node = node.rest){
        array.push(node.value)
    }
    return array;
}
function prepend(element, list){
    return {value: element, rest : list}
}
function nth(list, n){
    if (n === 0){
        return list.value
    }
    return nth(list.rest, n - 1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// deepEqual()
function deepEqual(x, y) {
    if (x === y) return true;
    if (x == null || typeof x != "object" ||
        y == null || typeof y != "object") return false;
    let keysX = Object.keys(x), keysY = Object.keys(y);
    if (keysX.length != keysY.length) return false;
    for (let key of keysX) {
        if (!keysY.includes(key) || !deepEqual(x[key], y[key]))
            return false;
    }
    return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true