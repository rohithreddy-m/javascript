const input="hi j\"oa\"f *)"
let ans=""
for (let i of input) {
    if(/^[A-Za-z0-9 ]+$/.test(i)) {
        ans+=i
    }  
}console.log(ans)