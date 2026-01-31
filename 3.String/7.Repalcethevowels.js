let input="asdf"
let ans=""
for (let i of input){
    if ("aeiou".includes(i)){
        ans=ans+"*"
    }else {
        ans=ans+i
    }
}console.log(ans)