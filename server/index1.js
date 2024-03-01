console.log('Hello World')
//ทำการ import เข้ามาเพื่อทำการ run server
const http= require('http')

//กำหนด host และ port เริ่มต้น
const host = 'localhost'
const port = 8000

//กำหนดค่าเริ่มต้นของ server เมื่อเปิดหน้าเว็บที่localhost:8000 ขึ้นมา
const requestListener = function(req,res) {
    res.writeHead(200)
    res.end("My first server!")
}

//ทำการ run server
const server = http.createServer(requestListener)
server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
