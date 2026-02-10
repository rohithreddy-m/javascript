const input=[9,4,3,6,2]
let ans
let list
// let list=input
// list.sort().reverse()
// console.log(list[1])
for (let i in input) {
    for (let j in input) {
        if (input[i] > input[j]) {
            let temp=input[j]
            input[j]=input[i]
            input[i]=temp
        }
    }
}console.log(input[1])