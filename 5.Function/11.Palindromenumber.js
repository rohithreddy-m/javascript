function Palindromenumber(number) {
    let num=number
    let anss=0
    let ans=0
    let len=(String(number).length)
    for (let i=1;i<=len;i++) {
    // for (let i=1;i<=(String(number).length);i++) {
        ans=number%10
        anss=(anss*10)+ans
        number=Math.floor(number/10)
    } if (anss === num)
       console.log(`${num} is Palindrom`)
      else 
        console.log(`${num} is not Palindrom`)
}
let number=1331
Palindromenumber(number)
// console.log((String(number).length))
