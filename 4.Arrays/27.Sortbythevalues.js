const input={"a":5,"n":2,"u":-1}
let list=[]
for (let i in input) {
    list.push([i,input[i]])
}
let temp
 for (let j=0;j<list.length;j++) {
    for (let k=j;k<list.length;k++) {
        if (list[j][1] > list[k][1]) {
            temp=list[k]
            list[k]=list[j]
            list[j]=temp
        }
    }
}
 let obj={}
let key
for (let g of list) {
    key=g[0]
    obj[key]=g[1]
    console.log(obj)
}