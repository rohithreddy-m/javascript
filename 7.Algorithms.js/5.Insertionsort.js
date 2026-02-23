function Insertionsort(list) {
    let len=list.length
    for(let i=1;i<len;i++) {
        for (let j = i;j>0;j--) {
            if (list[j]<list[j-1]) {
                [list[j],list[j-1]]=[list[j-1],list[j]]
            }
        }
    }console.log(list)
}
let list=[3,4,2,5,14,1,55,77,7,543,765,3456,7654,234]
Insertionsort(list)
