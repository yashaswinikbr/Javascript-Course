//ordered collection of data

var arr = [12,'ferari', true, 12.4]
//console.log(arr)

//accessing elements

var a= arr[1]
// console.log(a)
// console.log(arr[3])

//replace values in array
arr[1]='bentley'
//console.log(arr)

//to get length
//console.log('length of arrays is', arr.length)


//inbuilt js array methods

var arr2 = [12,14,56,57]

//1. pop method : takes out the last elements of array 

var c= arr2.pop()
console.log('popped array: ', arr2)
console.log(c)

//2. push method - adds element in array
arr2.push(100)
console.log('Pushed array', arr2)

//3. shift method - remove the element from starting of array
var d=arr2.shift()
console.log(d)
console.log('shifted array: ', arr2)

//4.unshift methhod- add value at start
arr2.unshift(102)
console.log('unshifted array: ', arr2)
