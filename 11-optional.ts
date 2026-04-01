// Optional Values in parameter
function generateError(msg?: string) {
    throw new Error(msg)
}
//with message
try {    
    generateError("An error occured")
} catch (error) {
    console.error(`Caught an error: ${error}`)
}

//without message
try {
    generateError();
} catch (error) {
    console.error(`Caught an error: ${error}`)
}

// generateError("An error occured") // Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
// generateError()


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guest';
        nickname?: string;
        scholarship?: boolean;
    }

    let user: User = {
        name: 'Veneese',
        age: 20
    }
    let user2: User = {
        name: 'Julia',
        age: 21,
        role: 'admin',
        nickname: 'onyourneese',
        scholarship: false
    }

    console.log(`\n--User Info--`)
    console.log(`Name: ${user.name}`)
    console.log(`Age: ${user.age}`)
    console.log(`Role: ${user.role??'No role assigned'}`)
    console.log(`Nickname: ${user.nickname??'No nickname assigned'}`)
    console.log(`Scholarship: ${user.scholarship??'No scholarship information'}`)
    // user.name

    console.log(`\n--User2 Info--`)
    console.log(`Name: ${user2.name}`)
    console.log(`Age: ${user2.age}`)
    console.log(`Role: ${user2.role??'No role assigned'}`)
    console.log(`Nickname: ${user2.nickname??'No nickname assigned'}`)
    console.log(`Scholarship: ${user2.scholarship??'No scholarship information'}`)
    // user.age
})()

// Nullish Coalescing `??` operator 
let input = ''
const didProvideInput = input ?? false;

console.log(input ?? false) // Output: '' (empty string is considered a valid input, not null or undefined)

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.

console.log('' ?? 'fallback') // Output: '' (empty string is considered a valid input, not null or undefined)
console.log( 0 ?? 'fallback')
console.log(false ?? 'fallback')
console.log(null ?? 'fallback')
console.log(undefined ?? 'fallback')

console.log('' || 'fallback') //output: 'fallback' (empty string is considered falsy, so it falls back to 'fallback')
console.log( 0 || 'fallback')
console.log(false || 'fallback')
console.log(null || 'fallback')
console.log(undefined || 'fallback')