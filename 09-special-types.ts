// Special Type - null
// let a: null;

// a = null
// // a = "Hi"

// let b: null | string

// b = null
// b = "Hi"
// // b = 10

type LoggedInUser = {
    name: string | null;
    email: string | null;
}

let currentUser: LoggedInUser | null = null
currentUser = {
    name: null,
    email: null
}
console.log(`\n--Login--`)
console.log(`Before login: ${currentUser??'No user logged in'}`)

currentUser = {
    name: "Julia",
    email: "julia@gmail.com"
}

console.log(`\n--Login--`)
console.log(`After login: ${currentUser?.name}`)
console.log(`Email: ${currentUser?.email}`)


// Special Type - undefined
// let c: undefined;

// c = undefined
// // c = null
// // c = "Hi"

// let d: undefined | string

// d = undefined
// d = "Hi"
// d = null
// d = 10
type UserProfile = {
    firstName: string;
    lastName: string;
    email: string | undefined;
    phone: string | undefined;
}

const userProfile: UserProfile = {
    firstName: "Veneese",
    lastName: "Lee",
    email: undefined,
    phone: undefined
}

console.log(`\n--User Profile--`)
console.log(`Name: ${userProfile.firstName} ${userProfile.lastName}`)
console.log(`Email: ${userProfile.email ?? 'No email provided'}`)
console.log(`Phone: ${userProfile.phone ?? 'No phone provided'}`)
