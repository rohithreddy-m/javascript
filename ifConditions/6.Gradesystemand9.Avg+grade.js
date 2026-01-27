let subjectTelugu = 85
let subjectMaths = 49
let subjectEnglish = 30
let subjectHindi = 93
let totalMarks = subjectEnglish+subjectHindi+subjectMaths+subjectTelugu
let totalSubject = 4
let average =totalMarks/totalSubject
if (average >= 35){
    console.log(`You got the A Grade.`)
} else if (average >= 5){
    console.log(`You got the B Grade.`)
}else {
     console.log(`You are Failed in Exam`)
}
