
const deleteText = document.querySelectorAll('.fa-trash')
const checkIcon = document.querySelectorAll('.fa-check');
const unCheckIcon = document.querySelectorAll('.fa-undo');

Array.from(checkIcon).forEach((element) => {
    element.addEventListener('click', markCompleted);
});

Array.from(unCheckIcon).forEach((element) => {
    element.addEventListener('click', markUnCompleted);
});



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
    const texiId = this.parentNode.dataset.id
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

    }catch(err){
        console.log(err)
    }
}

async function markUnCompleted(){
    const texiId = this.parentNode.dataset.id
    try{
        const response = await fetch('/markUnCompleted', {
            method: 'put',
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