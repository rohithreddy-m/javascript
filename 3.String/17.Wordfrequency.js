const input="hihiBrohiBro hihiBrohiBro rohit rohit hihiBrohiBro"
let Word=input.split(" ") 
let ans=" "
for (let i of Word) {
    let count=0
    if (ans.includes(i)) {
        continue
    } for (let j of Word){
        if ( i == j){
            count++   
        }
    } ans=ans + i + " "
    console.log(`${i} = ${count}`)
}