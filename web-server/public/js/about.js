
// console.log('kiki');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data.location);
//             console.log(data.forecast);
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const massagOne = document.querySelector('#message-1')
const massagTwo = document.querySelector('#message-2')
massagOne.textContent ='From JS'
massagTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = serach.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                massagOne.textContent = data.error
            } else {
                massagOne.textContent =data.location
                massagTwo.textContent = data.forecast
            }
        })
    })
})

