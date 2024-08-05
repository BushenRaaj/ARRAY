// ARRAY LIST PROGRAM 

/*
// 2 ARRAY MANIPULATION
// PUSH()

let a=[1,2,3,4,5,6];
a.push(10);
document.write(a);

// POP()

let b=[1,2,3,4,5,6];
b.pop(6);
document.write(b);


// UNSHIFT

let c=[1,2,3,4,5,6];
c.unshift(1);
document.write(c);

// SHIFT

let d=[1,2,3,4,5,6];
d.shift(1);
document.write(d);
*/


/*

// 3 ARRAY SEARCHING

//indexOf()

let a=[1,2,3,4,5,6];
b=a.indexOf(1);
document.write(b);

//find()

let a =['red','blue','green']
let b = a.find(a => a.startswith('g'));
document.write(b);

//includes()

let d=[1,2,3,4,5,6];
e=d.includes(5);
document.write(e);

*/

/*
// 4 ARRAY FILTERING

let num = [1, 2, 3, 4, 5, 6];

let even = num.filter(function(num) {
  return num% 2 === 0;
});

document.write(even);

*/

/*
// 6 ARRAY SORTING
// SORT

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.write(fruits); 

// REVERSE
let num = [40, 100, 1, 5, 25, 10];
num.reverse();
document.write(num); 

*/

/*
// 7 ARRAY JOINING AND SPLITTING
// join()

var letters = ["a", "b", "c", "d"];
var letter = letters.join(" ");
document.write(letter);


// split()

let str = "A b c d e";
let words = str.split(" ");
document.write(words); 

*/



// 8 ARRAY  DESTRUCTING

// const num = [1, 2];

// let a = num[0];
// let b = num[1];

// const [x, y] = num;

// document.write(x); 
// document.write(y); 


//12 check array elements

// const num = [1, 2, 3, 4, 5];
// const b = num.includes(3);

// document.write(b);

// //String : uppercase

// let msg=['hai','hello'];
// let res=msg.map((x) => x.toUpperCase());
// document.write(res);


/*

// 4. Array of finding max and min
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
document.write("Max Number:", maxNumber);
document.write("Min Number:", minNumber);

*/


/*
// 11 Flattening array

const nested = [1, [2, [3, [4, 5]]]];
const flat = nested.flat(Infinity);
document.write("Flattened Array:", flat);

*/


// 5 Map()

// let num1 = [1,2,3,4,5,6,7];
// let number1=num1.map((x) => x*2);
// document.write(number1);


/*
// 26 creating array of arrays


let arrayOfArrays = [];
    arrayOfArrays.push([1, 2, 3]);
    arrayOfArrays.push(['a', 'b', 'c']);
    arrayOfArrays.push([true, false, true]);
    document.write(arrayOfArrays); 
*/
/*
// 19 finding difference between two Arrays

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const difference1 = array1.filter(item => !array2.includes(item));
document.write(difference1); 
const difference2 = array2.filter(item => !array1.includes(item));
document.write(difference2);
*/

/*

// 18 arrayIntersection

function arrayIntersection(arr1, arr2) {
    let set = new Set(arr1);
    let intersection = [];

    for (let elem of arr2) {
        if (set.has(elem)) {
            intersection.push(elem);
            set.delete(elem); 
        }
    }
    return intersection;
}
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 3, 5];

let result = arrayIntersection(arr1, arr2);
document.write(result);
*/


// ================================================================================================================================================

// 31/07/2024

/*
// 13. Array of object sorting

const peoples = [
    { name: "Ram", age: 50 },
    { name: "Raja", age: 30 },
    { name: "Joy", age: 25 }
];
peoples.sort((a, b) => a.age - b.age);
console.log(peoples);
*/

/*
// 14. Merging the arrays

const arr1 = [4, 6, 8];
const arr2 = [9, 2, 3];
const mergedArr = [...arr1, ...arr2];
console.log( mergedArr);

*/

/*
// 15.Find the Index of the first occurence

let myArray = [1, 2, 3, 4, 2, 5];
let element = 5;
let index = myArray.indexOf(element);
console.log(index);
*/

/*
// 16. Creating new array with a given length

const length = 9;
const newArray = Array.from({ length }, (_, i) => i + 1);
console.log(newArray);
*/

/*
// 17. Array deduplication

const arr = [9, 2, 2, 4, 4, 8, 5];
const darray = [...new Set(arr)];
console.log(darray);
*/


// ===================================================================================================================================================

// 05/08/2024

/*
// 20. Grouping of array Elements

function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      const groupKey = currentValue[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      
      return result;
    }, {});
  
}
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ];
  const groupedByAge = groupBy(data, 'age');
  console.log(groupedByAge);
*/

/*
// 21. Array intersection of two Sets

function intersectArrays(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(element => set2.has(element));
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];
  
  const intersection = intersectArrays(array1, array2);
  console.log(intersection); 
*/

/*
// 22. Array Manipulation with Slice()

const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 4);
console.log(slicedArray);
*/

/*
// 23. Implemention a Queue with array

class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[0];
    }
    clear() {
      this.items = [];
    }
  }
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); 
  console.log(queue.peek());   
  console.log(queue.size());    
  console.log(queue.isEmpty()); 
  
  queue.clear();
  console.log(queue.isEmpty()); 
*/

/*
// 24. Implemention a Stack with array

class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
    clear() {
      this.items = [];
    }
  }
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop());   
  console.log(stack.peek());   
  console.log(stack.size());   
  console.log(stack.isEmpty());
  
  stack.clear();
  console.log(stack.isEmpty());
  */

// =================================================================================================================================================
