let input=" hi and i am rohith"
let string=input+" "
let ans=""
let start=0
let revesedWord=""
for (let I in string){
    let i=Number(I)
    if (string[i]==" "){
        for (let j=i-1;j>=start;j--){
            ans+=string[j]
            // console.log(ans)
        }
        start=i
    }
}console.log(ans)