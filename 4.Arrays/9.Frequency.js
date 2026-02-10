const input=[1,2,3,3,3,2,2,4,5,6,4,4433,3,2]
let ans=[]
for (let i of input) {
    if (!ans.includes(i)) {
    let count=0
    for (let j of input) {
        if (i === j) {
            count++
        }
    } ans.push(i)
    console.log(`${i}=${count}`)
    }
}