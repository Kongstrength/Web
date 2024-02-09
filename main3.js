/*
object function array
*/

let students = [
    {
      name: "John",
      score: 90,
      grade: 'A'
    },{
        name: "Yoshi",
        score: 80,
        grade: 'B'
    },{
        name: "Mario",
        score: 70,
        grade: 'C'
    }
]
//หาว่าอยู่ตรงไหน
let student = students.find((s) => {
  if (s.name == 'Yoshi') {
    return true
  }
})

//คูณตัวเลข 2 เท่า
let doublescore_student = students.map((s) =>{
  s.score = s.score *2
  return s
})

let highscore_student = students.filter((s) =>{
 if(s.score >=80){
    return true
 }
})

//การเรียกใช้ฟังค์ชั่น
console.log('students',student);
console.log('doublescore_student',doublescore_student)
console.log('highscore_student',highscore_student)