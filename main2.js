/*
array
*/

let score = [10,20,30,40]
//let newScore =[] //สร้างตัวแปรใหม่เพื่อกรองค่าที่มากกว่า 30

for(let index =0 ; index < score.length ; index++){
    console.log("score:",score[index]);
   // if(score[index] >= 30){ //ดึงค่าที่มากกว่าหรือเท่ากับ 30
        //newScore.push(score[index])
    //}
}
//filter ดึงจาก score มากกว่า 30
let newScore = score.filter((s) =>{
    if(s >= 30){
        return true
    }else {
        return false
    }
})
//ทำได้ทั้ง 2 แบบ
// let newScore = score.filter((s) =>{
    //return s >= 30
//})

newScore.forEach((ns)=>{ //ดึงข้อมูลใน new score มา
 console.log("neww score:",ns)
}) 

console.log("new score:",newScore)

// s --> 10 loop s--> 20 loop s--> 30 loop
score.forEach((s) =>{
console.log("score:",s)
})

//map ,filter คูณตัวเลขให้เป็น 2 เท่า
//วิธีปกติ
//score[0] = score[0] * 2
//score[1] = score[1] * 2
//score[2] = score[2] * 2
//score[3] = score[3] * 2

//s = 10,20,30,40
 score = score.map((s) =>{
   return s * 2
    })
    console.log("scores:",scores)

score.forEach((s) =>{
    console.log('new score:',s)
    })




