const input="asfsasasaasgbassadf"
let big=0
let ans
for ( let i of input) {
    let count=0
    for (let j of input) {
        if (i===j) {
            count++
        }
    } if (big < count){
        big=count
        ans=i
    }
}console.log(ans)