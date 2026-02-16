const input=5
let ans=1
for (let i =1;i<=input;i++) {
    ans*=i
}console.log(ans)
function Factorial(input) {
    let ans=1
    for (let i =1;i<=input;i++) {
        ans*=i
    }return ans
}
// console.log(input)
console.log(Factorial(input))