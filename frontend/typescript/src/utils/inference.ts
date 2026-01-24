const userName = "John Smith"
const gwa = 99
const isPassed = true

const sentence =  `
    ${ userName } has a general weighted average of ${ gwa } 
    and has ${ isPassed ? "passed" : "not passed" } the course.
`

console.log(sentence)

const account = {
    first_name: "John",
    last_name: " Doe",
    account_id: 10012026,
    user_email: "johndoe@gmail.com",
    user_password: "johndoe2026",
    is_active: true
}

const accountSummary = `Account Summary:
    Name: ${ account.first_name } ${ account.last_name }
    Account ID: ${ account.account_id }
    Email: ${ account.user_email }
    Password: ${ account.user_password }
    Status: ${ account.is_active ? "Active" : "Inactive" }
`

console.log(accountSummary)