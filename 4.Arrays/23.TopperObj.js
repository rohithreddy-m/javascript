let student={"Rohith":90,"Mani":100,"Reddy": 98,"Ramya":99}
let max=Object.values(student)[0]
let Topper=""
let i
for ( i in student) {
    if (max < student[i]) {
    max=student[i]
    Topper=i
    } 
}console.log(`${Topper} : ${max}`)