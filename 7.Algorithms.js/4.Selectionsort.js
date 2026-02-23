function Selectionsort(list) {
    let len=list.length
    for (let i =0;i<len;i++) {
        let samll=i
        for (let j =i+1;j<len;j++) {
            if (list[j]<list[samll]) {
                samll=j
            }
        }[list[i],list[samll]]=[list[samll],list[i]]
    }console.log(list)
}
let list=[5,4,3,7,8,1,2,9]
Selectionsort(list)