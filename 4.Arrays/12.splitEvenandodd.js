const input=[1,2,3,4,5,6]
let Even=[]
let Odd=[]
for (let i of input) {
    if (i%2==0) {
        Even.push(i)
    } else {
        Odd.push(i)
    }
}console.log(`Even=${Even}\nOdd=${Odd}`)
console.log(Even,Odd)