(() => {

    // Function Return Value Types
    function add(a: number, b: number): number { // you can omit the function type since typescript can infers it
        return a + b
    }
    function multiply(a: number, b: number): number { // you can omit the function type since typescript can infers it
        return a * b
    }
    function divide(a: number, b: number): number { // you can omit the function type since typescript can infers it
        if (b === 0) {
            console.error("Cannot divide by zero")
            throw new Error("Cannot divide by zero")
        }
        return a / b
    }

    console.log(`Add: ${add(5, 10)}`)
    console.log(`Multiply: ${multiply(5, 10)}`)
    console.log(`Divide: ${divide(5, 3)}`)

    add(5, 10)
    // add("5", 10)

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message: string): void {
        console.log(message)
    }

    function greetUser(name: string): void {
        console.log(`Hello, ${name}!`)
    }

    function showStatus(status: string): void {
        console.log(`Status: ${status}`)
    }
    
    log("Welcome to Appdev Class!")
    greetUser("Veneese")
    showStatus(404)

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string) {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }
    function infiniteLoop(): never {
        while (true) {
            console.log("Running...")
        }
    }
    // try {
    //     logAndThrow("Something went wrong!")
    // } catch (error) {
    //     console.error("Caught an error:", error)
    // }


    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb: (m: string) => void) {  // you can also use cb: Function but () => void is the best practice
        console.log("Performing job...")
        cb('Job well done!')
    }

    function PerformMathOperation(a: number, b: number, cb: (result: number)=> void): void {
        const result = a + b
        cb(result)
    }

    let logMsg = (msg: string): void => {
        console.log(msg)
    }

    let ShowResult = (result: number): void => {
        console.log(`Result: ${result}`)
    }

    performJob(logMsg)
    PerformMathOperation(5, 0, ShowResult)


    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        greet: () => string;
        getInfo: () => void;
        isAdult: () => boolean;

    }

    let user: User = {
        name: "Veneese",
        age: 18,
        course: "BSIS",
        greet() {
            console.log(`Hello, I am ${this.name}`)
            return this.name
        },
        getInfo() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`)
        },
        isAdult() {
            return this.age >= 18
        }
        // greet: function() {
        //     return this.name
        // }
    }

    user.greet()
    user.getInfo()
    console.log(`Is Adult: ${user.isAdult()}`)


    //void, never and return difference

    function returnsValue(): number {
        return 09
    }

    function returnsVoid(): void {
        console.log("This function returns void")
    }

    // function returnsNever(): never {
    //     throw new Error("This function never returns")
    // }

    console.log(`\n--void, never and return difference--`)
    console.log(`Value: ${returnsValue()}`)
    returnsVoid()
    try {
        returnsNever()
    } catch (error) {
        console.error("Caught an error:", error)
    }
})()
