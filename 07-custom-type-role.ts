(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guest' | 'teacher' | 'student'
    type Status = 'present' | 'absent' | 'excuse'
    type Department = 'IT' | 'Designer' | 'Business' | 'SQA'
     
    let userRole: Role = 'admin'
    let attendanceStatus: Status = 'present'
    let department: Department = 'Engineering'

    console.log(`User Role: ${userRole}`)
    console.log(`Attendance Status: ${attendanceStatus}`)
    console.log(`Department: ${department}`)

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        status: Status; 
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
        address: {
            street: string;
            city: string;
            country: string;
        }
    }

    const user1: User = {
        name: 'Julia',
        age: 21,
        status: 'late',
        role: 'student',
        permission: ['read', 'write'],
        address: {
            street: '123 Honeymoon Ave',
            city: 'Anytown',
            country: 'Switzerland'
        }
    }
    const user2: User = {
        name: 'Elmer',
        age: 30,
        status: 'present',
        role: 'teacher',
        permission: ['read', 'write', 'delete'],
        address: {
            street: '456 Sesame St',
            city: 'AnotherTown',
            country: 'Switzerland'
        }
    }
    console.log(`\n--User List--`)
    console.log(`${user1.name} | ${user1.role} | ${user1.status} | ${user1.address.street}`)
    console.log(`${user2.name} | ${user2.role} | ${user2.status} | ${user2.address.unit}`)
    console.log(`----`)
    
})()