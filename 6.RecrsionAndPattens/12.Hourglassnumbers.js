function Hourglassnumbers(num) {
    let countOne=0
    let countTwo=2
    for (let i =1;i<=(num*2)-1;i++) {
        if (i<=num) {
        let ans=""
        let ansr=""
        for (let j=1;j<=num-countOne;j++) {
            ansr+=j+" "
        }
        let rev=ansr
        rev=rev.split(" ").reverse()
        rev.splice(0,2)   
        ansr=ansr.split(" ").join("")
        ans=" ".repeat(countOne)+ansr+rev.join("")
        console.log(ans)
        countOne++
    } else { 
        let ans=""
        let ansr=""
        for (let j =1; j<=countTwo;j++ ) {
            ansr+=j+" "
        } let rev=ansr
        rev=rev.split(" ").reverse()
        rev.splice(0,2)
        ansr=ansr.split(" ").join("")
        ans=" ".repeat(countOne-2)+ansr+rev.join("")
        console.log(ans)
        countTwo++
        countOne--

    }
    }
}
let num=7
Hourglassnumbers(num) 
// 1 2 3 4 5 4 3 2 1
//   1 2 3 4 3 2 1
//     1 2 3 2 1
//       1 2 1
//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1