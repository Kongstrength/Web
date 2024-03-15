const BASE_URL = 'http://localhost:8000'


window.onload = async ( ) =>{
      await loadData()
}

window.loadData = async () => {
    // 1.load user ทั้งหมดจาก API http://localhost:8000/users
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    const userDOM = document.getElementById("user")

    let htmlData = '<div>'
    //  2.  นำ user ที่โหลดมาใส่กลับเข้าไปใน HTML
    for (let i =0;i<response.data.length; i++) {
        let user = response.data[i] //http://localhost:8000/users
        htmlData +=  `<div>
        ${user.id} ${user.lastname} (${user.lastname}
        <a href = 'index.html?id=${user.id}'><button>Edit</button></a>
        <button class='delete' data-id='${user.id}'>Delete</button>
        </div>`
    }
    htmlData +=  '</div>'
    userDOM.innerHTML = htmlData

    // 3. add event listener ให้กับปุ่ม delete
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0 ; i < deleteDOMs.length; i++){
        deleteDOMs[i].addEventListener('click' ,async (event) => {
            const id = event.target.dataset.id
            try{ //http:localhost:8000/users/1
            await axios.delete(`${BASE_URL}/users/${id}`)
            } catch{
                console.log('error',error)
            }
        })
    }
}
