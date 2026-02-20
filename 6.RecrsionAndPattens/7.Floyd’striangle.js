function Pascaltriangle (num) {
    let count=1
    for (let i=1;i<=num;i++) {
        let ans=""
        for (let j=1;j<=i;j++) {
            // console.log(count)
            // process.stdout.write(String(count))
            ans+=count
            count++
        }console.log(ans)
    }
}
let num=4
Pascaltriangle (num)
// 1
// 2 3
// 4 5 6
// 7 8 9 10
