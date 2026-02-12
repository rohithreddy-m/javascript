const input={"a":1,"b":0,"h":4}
let outterLoop=[]
for (let i in input) {
    let innerLoop=[]
    // innerLoop.push(i,input[i])
    // outterLoop.push(innerLoop)
    outterLoop.push([i,input[i]])
}console.log(outterLoop)