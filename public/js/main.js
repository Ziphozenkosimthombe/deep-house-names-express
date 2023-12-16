document.getElementById('updateButton').addEventListener('click', updateEntry)
// const TexiComplete = document.querySelectorAll('td.fa')
const deleteText = document.querySelectorAll('.fa-trash')
const checkText = document.querySelectorAll('.completed')

// document.addEventListener('DOMContentLoaded', ()=>{
//     const texiRows = document.querySelectorAll('.texi-row')
//     texiRows.forEach(row =>{
//         const completed = row.getAttribute('data-completed') === 'true';
        
//         if (completed){
//             row.style.textDecoration = 'line-through';
//         }
//         const faCheckIcon = row.querySelector('.fa-check');
//         if (faCheckIcon){
//             faCheckIcon.addEventListener('click', () => {
//                 // Toggle completion status on click
//                 const newCompleted = !completed;
        
//                 // Update the visual style
//                 row.style.textDecoration = newCompleted ? 'line-through' : 'none';
        
//                 // Send an AJAX request to update the completion status in the database
//                 updateCompletionStatus(info[i]._id, newCompleted);
//               });
//         }
//     })
// })

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteEntry)
})

Array.from(checkText).forEach((element)=>{
    element.addEventListener('click', markComplete)
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


// async function updateCompletionStatus(texiId, completed) {
//     try {
//       const response = await fetch('/updateCompletionStatus', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           texiId,
//           completed,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
// }
