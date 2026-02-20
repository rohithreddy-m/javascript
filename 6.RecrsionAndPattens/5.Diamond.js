function Diamond(num) {
    let countOne=1
    for (let i=1;i<=num;i++) {
        console.log(" ".repeat(num-i)+"*".repeat(countOne)+" ".repeat(num-i))
        countOne+=2
    }let countTwo=num+2
        for (let i=1;countTwo>=1;i++) {
        console.log(" ".repeat(i)+"*".repeat(countTwo)+" ".repeat(i))
        countTwo-=2
    // }for (let j=num;j>=1;j--) {
    //     console.log(" ".repeat())
    }
}
let num=5
Diamond(num)
//   *
//  ***
// *****
//  ***
//   *
