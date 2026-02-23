function Quicksort(list) {
    if (list.length<=1) {
        return list
    }
    let pivot=list[(list.length)-1]
    let left=[]
    let right=[]
    for (let i =0;i<list.length-1;i++) {
        if (list[i]<pivot) {
            left.push(list[i])
        }else {
            right.push(list[i])
        }
    } return [...Quicksort(left),pivot,...Quicksort(right)]
    // } return console.log((Quicksort(left),pivot,Quicksort(right)))
}
let list=[1,2,3,4,5,6,1,2,3]
console.log(Quicksort(list))