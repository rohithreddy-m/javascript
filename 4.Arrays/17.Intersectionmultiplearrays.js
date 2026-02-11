const inputOne=[1,2,3,4,-1,-1]
const inputTwo=[1,4,5,-1,6,7]
let ans=[]
for (let i of inputOne) {
    if (inputTwo.includes(i) && !ans.includes(i)) {
        ans.push(i)
    }
}console.log(ans)