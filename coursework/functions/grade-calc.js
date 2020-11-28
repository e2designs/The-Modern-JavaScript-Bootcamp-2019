// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


let gradeCalc = function(score, possible){

    if (typeof score === 'number' && typeof possible === 'number') {
        let percentage = (score / possible) * 100
        let letterGrade = null
        let vowel = 'a'
        if (percentage >= 90){
            letterGrade = 'A'
            vowel = 'an'
        } else if (percentage >= 80){
            letterGrade = 'B'
        } else if (percentage >=70){
            letterGrade = 'C'
        } else if (percentage >=60){
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }
        msg = `${score}/${possible} -> You received ${vowel} ${letterGrade} (${percentage}%)`
        console.log(msg)
        return msg
    } else {
        throw Error('Arguments must be numbers')
    }
}

// pass
try {
    // Test scenarios
    gradeCalc(90, 100)
    gradeCalc(7, 8)
    gradeCalc(15, 20)
    gradeCalc(5, 8)
    gradeCalc(5, 50)

} catch (e){
    console.log(e.message)
}

try {
    gradeCalc(90, 'A')
} catch (e){
    console.log(e.message)
}
