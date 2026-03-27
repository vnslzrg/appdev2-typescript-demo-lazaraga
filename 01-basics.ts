// console.log("Hello World!")

let userName: string = "Veneese";
let userAge: number = 20;
let course : string = "BSIS";
let isEnrolled: boolean = true;

// ...

userAge = 20

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)
console.log(`Course - ${course}`)
console.log(`Enrolled - ${isEnrolled}`)

function add(a: number, b: number = 5) {
    return a + b
}

console.log(add(20))
// add('10')
console.log(add(4, 4))
// add(10, '6')

function greetStudent(name: string, age: number): string {
    return `Hi ${name}, you are ${age} years old!`
}

console.log(greetStudent(userName, userAge))
console.log(greetStudent("userName", userAge))