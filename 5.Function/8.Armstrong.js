function Armstrong(input) {
    ans=0
    let str=String(input)
    let len=str.length
    for (let i of str){
        let a=Number(i)
        ans=ans+(a**len)
    } if (ans===input) {
        console.log(`${input} Amrstrong`)
    } else {
        console.log(`${input} is Not Armstong`)
    }
}
Armstrong(153)