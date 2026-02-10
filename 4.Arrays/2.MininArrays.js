const input=[9,8,5,3,6,3,1]
let ans=input[0]
for (let i of input) {
    if (i<ans) {
        ans=i
    }
}console.log(ans)