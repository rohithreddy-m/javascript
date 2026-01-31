let sentences=" i am rohith"
let big=0
let ams=""
let splits=sentences.split(" ")
for (let i of splits){
    if ( i.length > big){
        ans= i
        big=i.length
    }
}console.log(ans)