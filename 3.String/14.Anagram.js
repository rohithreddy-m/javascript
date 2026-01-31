const inputOne="abc"
const inputTwo="aab"
let count=0
for (let i of inputOne) {
    for( let j of inputTwo) {
        if (i.toLocaleLowerCase() === j.toLocaleLowerCase()) {
            count+=1
        }
    }
} if (inputOne.length === count) {
    console.log(`${inputOne} and ${inputTwo} is Anagram.`)
} else {
    console.log(`${inputOne} and ${inputTwo} is Not Anagram.`)
}