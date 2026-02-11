const input=[1,2,[3,4,"l",6],"p",[8,9,0]]
const ans=[]
for (let i of input) {
    if (Array.isArray(i)) {
         for (let j of i) {
            ans.push(j)
        }
    } else {
        ans.push(i)
    }
}console.log(ans)