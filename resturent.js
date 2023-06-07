
function Add(event) {
    event.preventDefault()
    const price = event.target.price.value
    const dish = event.target.dish.value
    const table = event.target.table.value

    const obj = {
        price,
        dish,
        table
    }

    console.log(obj)

    axios.post('https://crudcrud.com/api/8cab1b8c260b4a17b61855327e6e98c1/resdata',obj).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/8cab1b8c260b4a17b61855327e6e98c1/resdata').then((res) => {
        console.log(res.data)

        for (let i = 0; i<res.data.length; i++){
            console.log(res.data[i])
            showonscreen(res.data[i])
        }

    }).catch((err) => {
        console.log(err)
    })
})

function showonscreen(obj){

    let table = obj.table

    console.log(table)

    let parenteliment = document.getElementById(`${obj.table}`)

    let childeliment = document.createElement('li')
    childeliment.id = `${obj.table._id}`
    childeliment.textContent = ` Price: ${obj.price} Name of dish: ${obj.dish}`

    let deletebtn = document.createElement('input')
    deletebtn.type = "submit"
    deletebtn.value = "Delete Order"
    deletebtn.onclick = ()=>{
        parenteliment.removeChild(childeliment)
        axios.delete(`https://crudcrud.com/api/8cab1b8c260b4a17b61855327e6e98c1/resdata/${obj._id}`).then((res)=>{
            console.log("deleted succesfully")
        }).catch((err)=>{
            console.log(err)
        })
    }


    parenteliment.appendChild(childeliment)
    childeliment.appendChild(deletebtn)

}