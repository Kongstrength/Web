//string
let myData = 'abcd 1234 _=';

// boolean
let myeee =true; //,false


let x = String(12);
let y = Number('16'); //แปลงค่าเป็นตัวเลข
console.log(x+y)

a1 = 3  + 2;
a2 = 3  - 2;
a3 = 3  * 2;
a4 = 3  / 2;
a5 = 3  **2; //ยกกำลัง
a7 = 3  % 2; //หารเอาเศษ

x = 5;
x = x+5 ; //เพิ่มค่าขึ้น 5 = 10
x +=5; //เพิ่มค่าขึ้น 5 = 10 เหมือนกัน

let a = 7;
let b = 5;

let c1= a > b; //true
let c2= a >= b; //true

let c3= a < b; //false
let c4= a <= b; //false

let c5= a === b;// false เท่ากับ b หรือไม่
let c6= a !== b;// false a ไม่เท่ากับ b ใช้หรือไม่

let p = true;
let q = false;

let e1 = p && q; //false และ ต้องเป็นจริงทั้ง 2 ข้างหน้า
let e2 = p || q; // true หรือ ต้องเป็นจริงอย่างใดอย่างหนึ่ง
let e3 = !p; //false กลับค่า p ให้เป็นตรงข้าม


//if else 
let score = 75;

 if(score >= 80){
    console.log('grade A');
 }else if (score >= 70){
    console.log('grade B');
 }else {
    console.log('grade F');
 }

//loops
 for (let i= 1; i<=12 ;i++) {
    if(i % 2 === 0){
        continue; //ข้ามคำสั่งที่เป็นเลขคู่
    }
   let answer = i ** 2;
   console.log(answer);
 }
 for (let k =1 ; k<=12 ; k++){
    if(k % 10 === 0) {
        break; //ออกจาก loop
    }
    let answers = k ** 2;
    console.log(answers); 
 }


//หาปริมาตรปิรามิด แบบปกติ
 //let height = 2;
 //let width = 2;
 //let length = 3;
 //let base = length * width;
 //let pyramid = 1/3 * base * height;
 //console.log(pyramid);

 //หาแบบใช้ function
 function calculatePyramidArea(length,width,height) {
   let baseArea = length * width;
   let pyramidArea = 1/3 * baseArea * height;
   return pyramidArea;
 }
 let area1 = calculatePyramidArea(2,2,3); //output จะใส่ let หรือ area ก็ได้
 let  area2 =calculatePyramidArea(4,4,6);
    console.log(area1);
    console.log(area2);
    console.log('area 1=' ,area1 + ' area 2= ',area2)


//หาแบบใช้ arrow function หรือ => 

let saySomething2  = () => {
    console.log('Hello World');
}
saySomething2();

//array 
let fruit = ['apple','banana','kiwi'];
//fruit[1] = 'watermelon' //เปลี่ยนค่าใน array
//fruit.push('mango'); //เพิ่มค่าในตัวสุดท้าย array
//fruit.pop() //ลบค่าในตัวสุดท้าย array
//fruit.splice(0,1) //ลบค่าในตัวที่ 0 ออกไป 1 ตัว

console.log(fruit);
console.log(fruit.length); //นับจำนวนข้อมูลใน array

//array x loop
let student = [20,30,70,80,90];
let passedcount = 0;

//for(let i = 0;i <student.length; i++){
    //if(student[i]>= 50){
        //passedcount++;
    //}
//}

student.forEach((s) => {
    if(s >= 50){
        passedcount++;
    }
})

    console.log(passedcount);

//map filter 
//ใช้ return
let aaaa = [40,75,45,80,90];
let passfailscore =aaaa.map((s) => {
    if (s >= 50) {
        return 'pass';
    }
    return 'fail';
})
console.log(aaaa);
console.log(passfailscore);

//ใช้ filter
let bbbb = [56,75,45,40,20];
let passScore = bbbb.filter((s) => {
    return s >= 50;
})

//object
console.log(bbbb);
console.log(passScore);

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
let studente = students.find((s) => {
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