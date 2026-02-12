// const input="aabca"
// let obj={}
// let remove_Duplicate=""
// for (let i of input) {
//     let count=0
//     if (!remove_Duplicate.includes(i)) {
//         for (let j of input) {
//             if (i===j ) {
//                 count++
//             }
//         }obj[i]=count
//         remove_Duplicate+=i
//     }
// }  console.log(obj)
let d={}
const string="aabca"
for (let i of string){
    if (i in d){
        d[i]+=1
    } else {
        d[i]=1
    }
}console.log(d)