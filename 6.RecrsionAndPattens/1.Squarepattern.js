function box(num) {
    for (let i =1;i <= num ;i++) {
        for (let j=1;j<=num; j++) {
            // console.log(`*`)
            process.stdout.write(`*`)
        }console.log()
    }
}
num=2000
box(num)