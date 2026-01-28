let input=10
let ans=1
for (let i=1 ; i<=input;i++){
    ans=1
    for (let j=i;j>=1;j--){
        ans=j*ans
    }console.log(`${i}!=${ans}`)
}