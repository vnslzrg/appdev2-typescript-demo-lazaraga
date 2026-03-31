(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'IT' | 'UI/UX' | 'PM' | 'SQA' = 'UI/UX'

    console.log(`User Role: ${userRole}`)
    // anotherUserRole = 'superadmin'
    userRole = 'PM'
    console.log(`User Role: ${userRole}`)

    function getAccess(role: 'admin' | 'guest' | 'teacher' | 'student') {
        if (role === 'Admin') {
            return 'Full Access - manage everything'
        }
        if (role === 'teacher') {
            return 'Partial Access - manage students and courses'
        }
        if (role === 'student') {
            return 'Limited Access - view courses and submit assignments'
        }
        if (role === 'guest') {
            return 'Guest Access - view public content only'
        }
        return 'Invalid role'
    }
    console.log(getAccess('admin'))
    console.log(getAccess('teacher'))
    console.log(getAccess('student'))
    console.log(getAccess('member'))

    //using enum
    enum UserRole {
        IT = 'IT',
        UI_UX = 'UI/UX',
        PM = 'PM',
        SQA = 'SQA'
    }

    //using literal types
    type UserRoleType = 'IT' | 'UI/UX' | 'PM' | 'SQA'

    let role1: UserRole = UserRole.PM
    let role2: UserRoleType = 'IT'

    console.log(`Role1: ${role1}`)
    console.log(`Role2: ${role2}`)

    //using alias to reuse the same literal type
    type Status = 'present' | 'absent' | 'excuse'
    type Subjects = 'Math' | 'Science' | 'History'

    let attendanceStatus: Status = 'Present'
    let subject: Subjects = 'English'
    
    console.log('Attendance Status:', attendanceStatus)
    console.log('Subject:', subject)
    console.log (`Status: ${attendanceStatus}, Subject: ${subject}`)
})()