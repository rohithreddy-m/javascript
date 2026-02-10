const input=[1,3,4,5,2]
let ans=input[0]
for (let i=0;i<input.length ;i++) {
    if (input[i]>ans){
        ans=input[i]
    }
}console.log(ans)
