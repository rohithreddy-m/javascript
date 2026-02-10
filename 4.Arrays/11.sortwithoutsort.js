const input=[9,2,4,5,6]
for (let i in input) {
    for (let j in input) {
        if (input[i]<input[j]) {
            let temp=input[j]
            input[j]=input[i]
            input[i]=temp
        }
    }
}console.log(input) 