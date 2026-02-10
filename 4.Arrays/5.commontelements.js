const inputOne=[1,2,3,46,7,8,8]
const inputTwo=[9,1,4,8,0,5,3]
let ans=[]
for (let i of inputOne) {
    if (inputTwo.includes(i) && !ans.includes(i)) {
        ans.push(i)
    }
}console.log(ans)