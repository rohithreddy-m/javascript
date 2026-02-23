function Binarysearch(list,char) {
    list.sort((a,b) => a-b)
    let len=list.length
    let start=0
    let end=len-1
    while (start<=end) {
        let half=Math.floor((start+end)/2)
        if (char ===list[half] ) {
        return half
        } else if (char>list[half]) {
            start=half+1
        } else {
            end=half-1
        }
    } return -1
}
let list=[1,2,3,4,5,6,7,8,9]
let char=8
let Res=Binarysearch(list,char)
if (Res != -1) {
    console.log(`The index of give number ${Res}`)
} else {
    console.log(`Give number is not there in list`)
}