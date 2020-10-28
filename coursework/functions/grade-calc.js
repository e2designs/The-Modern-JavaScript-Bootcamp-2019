// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


let gradeCalc = function(score, possible){
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
    console.log(`${score}/${possible} -> You received ${vowel} ${letterGrade} (${percentage}%)`)
}


gradeCalc(90, 100)
gradeCalc(7, 8)
gradeCalc(15, 20)
gradeCalc(5, 8)
gradeCalc(5, 50)