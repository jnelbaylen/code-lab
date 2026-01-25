// EXPLICIT
const greeting: string = "Hello, World"
const userCount: number = 10
const isLoading: boolean = false

const scores: number[] = [90, 99, 93]

const sentence: string = `
    Hi, this is my first ${ greeting }.
    There are ${ userCount } users.
    Loading status: ${ isLoading }.
    My scores are ${ scores }.
`

console.log(sentence)

function showName(fullName: string): string {
    return `Hello, ${ fullName }`   
}

console.log(showName("John Doe"))