
// const TexiComplete = document.querySelectorAll('td.fa')
const deleteText = document.querySelectorAll('.fa-trash')
const checkText = document.querySelectorAll('td .completed')


Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteEntry)
})

Array.from(checkText).forEach((element)=>{
    element.addEventListener('click', markComplete)
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

// not yet working  i am still working on the markComplete
async function markComplete(){
    const texiId = this.parentNode.dataset.id
    // const row = this.parentNode
    // const sName = row.children[0].innerText
    // const numPlate = row.children[1].innerText
    // const place = row.children[2].innerText
    // const number = row.children[3].innerText

    try{
        const response = await fetch('/markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'texiIdFromJSFile': texiId
                // 'specialName': sName,
                // 'numberPlate': numPlate,
                // 'place': place,
                // 'number': number
              })

        })
        const data = await response.json()
        console.log(data)
        location.reload()


    }catch(error){
        console.error(error);
    }

}


