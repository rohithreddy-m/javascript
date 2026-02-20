function Numbertriangle (num) {
    for (let i=1;i<=num;i++) {
        let res = '';
        for (let j=1;j<=i;j++) {
            // process.stdout.write(j)
             res += j+1
            // console.log(j)
        }
        console.log(res)
    }
}
num=4
Numbertriangle(num)
// 1
// 12
// 123
// 1234
