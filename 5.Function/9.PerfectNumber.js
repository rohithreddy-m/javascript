function PerfectNumber(input) {
    let ans=0
    let half=Math.ceil(input/2)
    for (let i=1;ans<=half;i++) {
        if (input % i ===0) {
            ans+=i
        }         
    } if (ans==input) {
        console.log(`${input} is PerfectNumber.`)
    } else {
        console.log(`${input} is Not PerfectNumbet.`)
    }
}
PerfectNumber(8128)