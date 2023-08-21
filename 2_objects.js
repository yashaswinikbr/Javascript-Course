// JS objects are in Kay value pairs

var person = {
    firstName : 'Adam',
    lastName : 'smith',
    age : 25,
    ownsCar : false
}
//console.log(person)
//access 
// dot notation
//console.log(person.age)

// bracket notation
//console.log(person['firstName'])

//array of objects
var cap ={
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 100,
    friends : ['B B', 'B Banner','Tony Stark'],

    isAvenger : true,
    address : {
        state : 'New york',
        city : {
            name :'Brooklyn',
            pincode : 1234555
        }
    }
}

//console.log(cap.friends[1])
//console.log(cap.address.city.name)

//update
//cap.isAvenger = false

//console.log(cap)

//delete cap.age
console.log(cap)


