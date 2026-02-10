const input=[9,6,4,3,2,4,3,2,4,6,7,7,8]
let ans=[]
for (let i of input) {
    if (!ans.includes(i)) {
    ans.push(i)
    }
} console.log(ans.join(","))
console.log(ans)