// various ways to decalre array 

var arr1 = [12,3,"abc",76]
document.write("First array : "+arr1+"<br>")

var arr2 = new Array(15,24,"xyz")
document.write("<br>"+"Second array using new operator: "+arr2+"<br>")

var arr3 = [23,1,arr2]
document.write(`<br>Third array : ${arr3} <br><span style='font-size: 16px; font-weight:bold'>length()</span> - Length of array is  ${arr3.length} <br>`) 

var arr4 = [1,2,3,...arr3]
document.write(`<br>Fourth array using spread operator : ${arr4} <br>`)

//  Add an element to array
document.write(`<br><span style='font-size: 20px; font-weight:bold'>Add an element to array</span> <br>`)
var arr = [10,20,25,15,30,45]

//  1. Add an element at the end of array
document.write(`<br><span style='font-size: 16px; font-weight:bold'>Add an element at the end of array - push() </span><br>`)
document.write(`<br>Array is : ${arr}<br>`)
arr.push("pqrs");
document.write(`<br>After adding element at end array is : ${arr}<br>`)

//  2. Add an element at the begining of array
document.write(`<br><span style='font-size: 16px; font-weight:bold'>Add an element at the begining of array - unshift()</span><br>`)
document.write(`<br>Array is : ${arr}<br>`)
arr.unshift("abc");
document.write(`<br>After adding element at begining array is : ${arr}<br>`)

//  3. Add an element at given position
document.write(`<br><span style='font-size: 16px; font-weight:bold'>Add an element at given position - splice(index,0,elements)</span><br>`)
document.write(`<br>Array is : ${arr}<br>`)
arr.splice(2,0,68,77);
document.write(`<br>After adding element at 2nd position array is : ${arr}<br>`)

//  ---------------------------------------------------------------

//  Delete an element from array 

//  1. Delete an element at the end of array
document.write(`<br><span style='font-size: 16px; font-weight:bold'>Delete an element at the end of array - pop() </span><br>`)
document.write(`<br>Array is : ${arr}<br>`)
arr.pop();
document.write(`<br>After deleting element at end array is : ${arr}<br>`)

//  2. Delete an element at the begining of array
document.write(`<br><span style='font-size: 16px; font-weight:bold'>Delete an element at the begining of array - shift() </span><br>`)
document.write(`<br>Array is : ${arr}<br>`)
arr.shift();
document.write(`<br>After deleting element at begining array is : ${arr}<br>`)

//  3. Delete an element at given position
document.write(`<br><span style='font-size: 16px; font-weight:bold'>Delete an element at given position - splice(index,noOfElementstoDelete) </span><br>`)
document.write(`<br>Array is : ${arr}<br>`)
arr.splice(3,1);
document.write(`<br>After deleting element at 3rd position array is : ${arr}<br>`)

//  ---------------------------------------------------------------

// replace from given position 
arr.splice(2,1,108,21);
//  delete 1 value from 2nd position and add 108,21 at 2nd position and shift elements to right 
document.write(`<br><span style='font-size: 16px; font-weight:bold'> After Replace from given position - splice(index,noOfElements,elements)</span><br>`)
document.write(`<br>Array is : ${arr}<br>`)


// to find position of the value
// var value = parseInt(prompt("Enter value to find position"))
document.write(`<br>Find position of given value - <span style='font-size: 16px; font-weight:bold'>indexOf(value)</span>`)
document.write(`<br>Index is : ${arr.indexOf(25)}<br>`)


// findIndex - find position based on condition ( first occurence )
document.write(`<br>Find position based on condition returns first occurence index - <span style='font-size: 16px; font-weight:bold'>findIndex(condition)</span>`)
var pos = arr.findIndex(ob=>ob>80)
document.write(`<br> ${arr}`)
document.write(`<br>Index is : ${pos}<br>`)


// find - find value based on condition 
var value = arr.find(ob=>ob>25)
document.write(`<br>Find value based on condition returns first occurence only - <span style='font-size: 16px; font-weight:bold'>find(condition)</span>`)
document.write(`<br> ${arr}`)
document.write(`<br> ${value}<br>`)


//  filter - find all values based on condition returns array 
document.write(`<br>Find all values based on condition returns array  - <span style='font-size: 16px; font-weight:bold'>filter(condition)</span>`)
var result = arr.filter(ob=>ob>25)
document.write(`<br> ${result} <br>`)


// sort the array 
document.write(`<br>Sort the array - <span style='font-size: 16px; font-weight:bold'>sort()</span>`)
document.write(`<br>${arr}`)
document.write(`<br>It sorts based on ASCII values<br>`)

//  numberic sort 
document.write(`<br><span style='font-size: 16px; font-weight:bold'> Numeric Sort </span><br>`)
document.write(`<br>Sort in ascending order`)
arr.sort((a,b)=>a-b);
document.write(`<br>${arr}<br>`)

document.write(`<br>Sort in descending order`)
arr.sort((a,b)=>b-a);
document.write(`<br>${arr}<br>`)

//  map function 
//  read values - apply expressions and convert into another value 
document.write(`<br> Array is : ${arr}<br>`)
document.write(`<span style='font-size: 16px; font-weight:bold'>Map</span>`)
var arr1 = arr.map(x=>x*x);
document.write(`<br> Second array squares of first array : ${arr1}<br>`)