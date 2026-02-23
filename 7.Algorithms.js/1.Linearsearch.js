function LinearSearch(list,char) {
    let flag=true
    let len=list.length
    for (let i=0;i<=len-1;i++) {
        if (char==list[i]) {
            console.log(`${char} is there in [${list}] and index is ${i}`)
            flag=false
            break
        } 
    }if (flag)
    console.log(`${char} is Not there in [${list}]`)
}
let list=[1,2,3,4,56,8,6,4,44]
let char=0
LinearSearch(list,char)