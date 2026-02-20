function Pyramind(num) {
    let count=1
    // let linSpace=Math.floor(num/2)
    for (let i=num;i>=1;i--) {
        console.log(" ".repeat(i-1)+"*".repeat(count)+" ".repeat(i-1))
        count+=2
    }
}
let num=5
Pyramind(num)
//   *  
//  *** 
// *****
