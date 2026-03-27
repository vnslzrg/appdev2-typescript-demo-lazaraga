(() => {
    enum Role {
        //SuperAdmin,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.SuperAdmin;

    console.log(`User Role: ${userRole}`)

    enum Direction{
        North,
        South,
        East,
        West
    }
    console.log(Direction.North)
    console.log(Direction.West)

    enum NumberRole {
        SuperAdmin = 1,
        Teacher = 2,
        Student = 3
    }

    console.log(NumberRole[1])
    console.log(NumberRole[2])
    console.log(NumberRole[3])

})()

