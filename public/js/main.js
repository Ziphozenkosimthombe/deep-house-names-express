document.getElementById('updateButton').addEventListener('click', updateEntry)
// const TexiComplete = document.querySelectorAll('td.fa')
const deleteText = document.querySelectorAll('.fa-trash')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteEntry)
})




async function updateEntry(){
    try{
        const res = await fetch('updateEntry', {
            method: 'put',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                specialName: document.getElementsByName("specialName")[0].value,
                placeToDeliver: document.getElementsByName("placeToDeliver")[0].value,
                numberPlate: document.getElementsByName("numberPlate")[0].value,
                number: document.getElementsByName("number")[0].value,
                image: document.getElementsByName('image')[0].value
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(error){
        console.error(error);
    }
}

async function deleteEntry(){
    const sName = this.parentNode.children[0].innerText
    const numPlate = this.parentNode.children[1].innerText
    const place = this.parentNode.children[2].innerText
    const number = this.parentNode.children[3].innerText

    try{
        const response = await fetch('deleteEntry', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'specialName': sName,
              'numberPlate': numPlate,
              'place': place,
              'number': number
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}



