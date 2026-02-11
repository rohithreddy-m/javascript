const input=[1,2,3,2,3,4]
const Remove=2
let ans=[]
for (let i of input) {
    if (!ans.includes(i)) {
        if (i != Remove) {
            ans.push(i)
        }
    }
}console.log(ans)