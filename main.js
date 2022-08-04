// alert("Hello World");

// Data types in JS
const name = 'Ayebs'; //string
const age = '24'; //number
// const isCute = true; //boolean
// const x = null
// const y = undefined
// let z; //this is also undefined but not explicitly defined like it is in line 8 

// console.log(typeof x);

// concatenation
console.log('My name is ' + name + ' and I am ' + age + ' years old' );
console.log(`My name is ${name} and I am ${age} years old` );
const hello = `My name is ${name} and I am ${age} years old` 
console.log(hello)

//Arrays
const fruits = ['apples', 'mangoes', 'grapes'];

fruits[3] = 'cherries'; //adding a new element at the end of the array
fruits.push('banana'); //most appropriate, helps in case index is unknown

fruits.unshift('guava'); //adds element at the beginning 

fruits.pop(); //deletes the last element in the array
console.log(fruits);
console.log(Array.isArray('hello'))

//Object literals = key:value pairs
const friend = {
    firstName: 'Ayebea',
    lastName: 'Koranteng',
    age: 24,
    hobbies: ['reading', 'cooking', 'music', 'coding'],
    address: {
        city: 'Accra',
        hseNo: '135/CAB'
    }
}
friend.email = 'ayebs@gmail.com' //to add a new element

console.log(friend); 
console.log(friend.firstName, friend.hobbies); //you can log multiple elements, separating them with a comma(,)

//for loop
for(let i = 0; i < 10; i++) {
    console.log(i);
    console.log(`For loop number: ${i}`);
}

//while loop
let i = 0;
while (i < 10) {
console.log(`While loop number: ${i}`);
i++;
}

//to do
const todos = [
    {
        id: 1,
        task: 'Do laundry',
        isCompleted: true
    },
    {
        id: 2,
        task: 'Learn JavaScript Crash Course',
        isCompleted: true
    },
     {
        id: 3,
        task: 'Meeting with mentor',
        isCompleted: false
    }
]; 

console.log(todos)
console.log(todos[1].task);

const todoJSON = JSON.stringify(todos);
// we use JSON if we need to send data to a server
console.log(todoJSON);

//iterating over arrays 
for(let x of todos) {
    console.log(x.task); 
}

//high order array methods
