function Palindromenumber(number) {
    let num=number
    let anss=0
    let ans=0
    let len=(String(num).length)
    for (let i=1;i<=len;i++) {
    // for (let i=1;i<=(String(number).length);i++) {
        ans=number%10
        anss=(anss*10)+ans
        number=Math.floor(number/10)
    } if (anss === num)
       console.log(`${num} is Palindrom`)
      else 
        console.log(`${num} is not Palindrom`)
        // ans=String(num).split("")
        // let len=ans.length-1
        // let inLoopLenght=Math.floor(len/2)
        // let count=len
        // let flag=false
        // for (let i =0;i<= inLoopLenght;i++) {
        //     if (ans[i] != ans[count]) {
        //         break
        //     }
        //     else {
        //         flag=true
        //         count--
        //     }
        // } if (flag)
        //     console.log("It is Palindrome")
        //   else 
        //     console.log(`It is Not Palindrome`)
}
let number=1212112121
Palindromenumber(number)
