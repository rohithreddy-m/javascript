const input=[1,2,-3,4]
for (let i in input) {
    if (input[i] < 0) {
        input[i] =0
    }
}console.log(input)