function Invertedtriangle(num) {
    for(let i =num; i >= 1;i--) {
        for (let j = i; j>=1;j--) {
            process.stdout.write(`*`)
        } console.log()
    }
}
num=5
Invertedtriangle(num)