function  Hollowidiamond(num) {
    let countOne=0
    let countTwo=num-2
    for (let i=1;i<=(num*2)-1;i++) {
        let rows=""
        for (let j=1;j<=(num*2)-1;j++) {
            if (i<=num) {
            if ( (i==1 && j==num ) ){
                rows+="*"
            } else if (i>1  && j==num-countOne ||i>1 && j==num+countOne ) {
                rows+="*"
            } else {
                rows+=" "
            }
        } else if (i>num) {
              if ( (i==(num*2)-1 && j==num ) ){
                rows+="*"
            } else if (j==num-countTwo || j==num+countTwo) {
                rows+="*"
            } else {
                rows+=" "
            }
        }
    } console.log(rows)
     if (i<=num)
        countOne++
      else
        countTwo--
    }
}
let num=4
Hollowidiamond(num)
//    *    4
//   * *   3 5 
//  *   *  2 6 
// *     * 1 7
//  *   *  2 6 
//   * *   3 5
//    *    4 