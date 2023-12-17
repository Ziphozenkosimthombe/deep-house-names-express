document.getElementById('updateButton').addEventListener('click', updateEntry)
// const TexiComplete = document.querySelectorAll('td.fa')
const deleteText = document.querySelectorAll('.fa-trash')
const checkText = document.querySelectorAll('.completed')


Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteEntry)
})

Array.from(checkText).forEach((element)=>{
    element.addEventListener('click', markComplete)
})


async function updateEntry(){
    try{
        const res = await fetch('/:id', {
            method: 'put',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                specialName: document.getElementsByName("specialName")[0].value,
                placeToDeliver: document.getElementsByName("placeToDeliver")[0].value,
                numberPlate: document.getElementsByName("numberPlate")[0].value,
                number: document.getElementsByName("number")[0].value,
                // image: document.getElementsByName('image')[0].value
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
    const row = this.parentNode
    const sName = row.children[0].innerText
    const numPlate = row.children[1].innerText
    const place = row.children[2].innerText
    const number = row.children[3].innerText

    try{
        const response = await fetch('index/deleteEntry', {
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

// not yet working  i am still working on the markComplete
async function markComplete(){
    const row = this.parentNode
    const sName = row.children[0].innerText
    const numPlate = row.children[1].innerText
    const place = row.children[2].innerText
    const number = row.children[3].innerText

    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'specialName': sName,
                'numberPlate': numPlate,
                'place': place,
                'number': number
              })

        })
        const data = await response.json()
        if (data){
            row.children[0].style.textDecoration = 'line-through';
        }
        console.log(data)
        location.reload()


    }catch(error){
        console.error(error);
    }

}


