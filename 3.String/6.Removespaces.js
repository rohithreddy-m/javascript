let input="adfja asdfkj a"
let ans=""
for (let i of input){
    // console.log(i)
    if(i ==" "){
        continue
    }
//    i.replace(" ","")
   ans=ans+i
}console.log(ans)