const input=[1,2,3,4,5]
const rotate=3
let rotates=rotate%input.length
const ans=[]
for (let i =0; i < input.length;i++) {
    if (i < rotates) {
        // ans.push(input[i])
        ans[input.length-rotates+i]=input[i]
    } else {
        // ans.unshift(input[i])
        ans[i-rotates]=input[i]
    } 
}
console.log(ans)