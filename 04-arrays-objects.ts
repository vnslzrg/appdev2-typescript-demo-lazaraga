let hobbies = ["Gaming", "Coding", "Cooking"]

hobbies.push("Traveling")
console.log(hobbies)

let scores1: number[] = [100, 90, 80]
let scores2: Array<number> = [100, 90, 80]

console.log(scores1)
console.log(scores2)    


// let userList: (string | number)[];

let userList: Array<string | number>;
userList = ["Veneese", "VeneeseJulia", 2300152]
console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Veneese",
    age: 21,
    hobbies: ["Watching", "Sleeping"],
    role: {
        description: 'student',
        id: 2300152 ,
        isAdmin: false
    }
}
console.log(`
    Name: ${user.name}, 
    Age: ${user.age}` + `, 
    Hobbies: ${user.hobbies.join(", ")}` + `, 
    Role: ${user.role.description}, 
    ID: ${user.role.id}` + `, 
    Is Admin: ${user.role.isAdmin}`)

// Must not null or undefined
let val: {} = "Lia"
console.log(val)


// Flexible Object - Record Type
let studentData: Record<string, number | string>

studentData = {
    name: 'Lia',
    age: 21,
    course: 'BSIS',
    isEnrolled: true
}

console.log(studentData)

let classlist: Record<string, string[]>

classlist = {
    "BSIS 3A": ["Veneese", "Lia", "Julia"],
    "BSIS 3B": ["Neese", "VJ", "JV"]
}
console.log(classlist)