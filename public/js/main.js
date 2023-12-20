
const deleteText = document.querySelectorAll('.fa-trash')
const completed = document.querySelectorAll('td.completed')

Array.from(completed).forEach((element)=>{
    element.addEventListener('click', markCompleted)
})

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteEntry)
})



async function deleteEntry(){
    const texiId = this.parentNode.dataset.id

    try{
        const response = await fetch('/deleteEntry', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'texiIdFromJSFile': texiId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markCompleted(){
    const texiId = parentNode.dataset.id

    try{
        const response = await fetch('/markCompleted', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'texiIdFromJSFile': texiId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(error){
        console.error(error);
    }
}