let input=" i asdf tonfa      a    m r   "
let count=0
    if (input.at(-1) != " "){
        count=1
    }for (let i in input){    
        if (input[i]!= " "){
            if (input[Number(i)+1] == " "){
                count++
            }
        }    
    }console.log(count)

