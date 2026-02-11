const inputOne=[1,2,3,4]
const inputTwo=[9,8,7,3,]
const inputThree=[5,6,4,7,8]
let ans=[]
// for (let i of input) {
for (let i of [inputOne,inputTwo,inputThree]) {
    for (let j of i) {
        if (!ans.includes(j)) {
            ans.push(j)
        }
    }
}console.log(ans.sort())