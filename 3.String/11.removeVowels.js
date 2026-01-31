let input="Rohit reddy"
let ans=""
for (let i of input){
    if ("aeiou".includes(i)){
        continue
    }else{
        ans+=i
    }
}console.log(ans)