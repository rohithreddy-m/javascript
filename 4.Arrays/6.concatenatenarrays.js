const inputOne=[1,2,3,4]
const inputTwo=[9,76,54,4,3,8]
let ans=[]
// let list=inputOne+inputTwo
// for (let i of list) {
//     if ( i != ",") {
//     ans.push(i)
//     }
// }console.log(ans)
for (let i of inputOne) ans.push(i)
for (let i of inputTwo) ans.push(i)
console.log(ans)