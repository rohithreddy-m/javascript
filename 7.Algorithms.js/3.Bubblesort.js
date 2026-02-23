function Bubblesort(list) {
    let len=list.length
    let count=0
    for (let j=0;j<len;j++) {
        for (let i =0 ;i<=len-j-1;i++) {
            if (list[i]>list[i+1]) {
                // temp=list[i+1]
                // list[i+1]=list[i]
                // list[i]=temp
                [list[i+1],list[i]]=[list[i],list[i+1]]
            }
        }
    }console.log(list)
}
let list=[4,9,8,7,5,3,1]
Bubblesort(list)


