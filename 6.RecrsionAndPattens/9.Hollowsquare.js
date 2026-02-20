function Hollowsquare(num) {
     for (let i =1 ;i<=num;i++) {
        if (i==1||i==num) {
            console.log("1".repeat(num))
        } else {
            console.log("1"+" ".repeat(num-2)+"1")
        }
     }
}
let num = 7
Hollowsquare(num)
// ****
// *  *
// *  *
// ****
