const input=[["a",1],["b",6]]
let obj={}
for (let i of input) {
    obj[i[0]]=i[1]
    console.log(obj)
}