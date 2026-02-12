const input={"a":2,"n":9,"u":1}
let list=[]
let smallNumber=Infinity
for (let i in input) {
    list.push([i,input[i]])
}
let temp
 for (let j in list) {
    for (let k in list) {
        if (list[j][1] < list[k][1]) {
            temp=list[k]
            list[k]=list[j]
            list[j]=temp
            temp=list[k]
        }
    }
} let obj={}
let key
for (let g of list) {
    key=g[0]
    obj[key]=g[1]
}
console.log(obj)