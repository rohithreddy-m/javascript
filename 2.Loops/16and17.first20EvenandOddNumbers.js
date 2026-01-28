let input=2
let count=1
for (let j =1;count<=input;j++){
    // if (j%2==0 && count<=input){
    if (j%2!=0 && count<=input){
        // console.log(`${j} Even Number.`)
        console.log(`${j} Odd Number.`)
        count+=1
    }
}