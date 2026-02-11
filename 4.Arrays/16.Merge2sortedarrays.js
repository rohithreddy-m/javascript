const inputOne=[3,4,5,8,8]
const inputTwo=[1,2,6]
let CountOfI=0
let CountOfJ=0
let ans=[]
// for (let i =0 ; CountOfI < inputOne.length ;) {
//     for (let j =0 ; CountOfJ < inputTwo.length ;) {
//         if (inputOne[i] < inputTwo[j]) {
//             ans.push(inputOne[i])
//             // console.log(inputOne[i])
//             CountOfI++
//         } else {
//         ans.push(inputTwo[j])
//         console.log(ans)
//         CountOfJ++
//         }  
//     }
// }console.log(ans)
while (CountOfI < inputOne.length && CountOfJ < inputTwo.length ) {
    if (inputOne[CountOfI] < inputTwo[CountOfJ]) {
        ans.push(inputOne[CountOfI])
        CountOfI++
    } else {
        ans.push(inputTwo[CountOfJ])
        CountOfJ++
    }
} while ( CountOfI < inputOne.length) {
    ans.push(inputOne[CountOfI])
    CountOfI++
} while (CountOfJ < inputTwo.length) {
    ans.push(inputTwo[CountOfJ])
    CountOfJ++
}

console.log(ans)