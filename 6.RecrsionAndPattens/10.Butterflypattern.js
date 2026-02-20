function Butterflypattern(num) {
    let lastDigite=num+num
    let count=0
    for (let i=1;i<=lastDigite;i++) {
        if (i<=num) {
            console.log("*".repeat(i)+" ".repeat(lastDigite-(i+i))+"*".repeat(i))
        } else {
            console.log("*".repeat(num-count)+" ".repeat(count+count)+"*".repeat(num-count))
            count++
        }
    }
}
let num=3
Butterflypattern(num)
// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *