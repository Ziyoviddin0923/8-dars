// const showBtn=document.getElementById('show-btn');
// const model=document.getElementById('model');
// const closeBtn=document.getElementById('close-btn');
// const overlay=document.getElementById('overlay')

// showBtn.addEventListener('click', () =>{
//     model.classList.remove('hidden')
//     overlay.classList.remove('hidden')
// })

// showBtn.addEventListener('click', () =>{
//     model.classList.add('hidden')
//     overlay.classList.add('hidden')
// })
// overlay.addEventListener('click', () =>{
//     model.classList.add('hidden')
//     overlay.classList.add('hidden')
// })

// document.addEventListener('keydown',(e) =>{
//     if (e.key == 'Escape'){
//         model.classList.add('hidden')
//         overlay.classList.add('hidden')
//     }

// })


const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

const addHidden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const removeHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', removeHidden)

closeBtn.addEventListener('click', addHidden)

overlay.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        addHidden()
    }
})