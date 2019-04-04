console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector ('form')

weatherForm.addEventListener ('submit', (e) => {
    e.preventDefault()
    const location = document.querySelector ('input').value

    document.querySelector('#message1').textContent = 'Loading...'
    document.querySelector('#message2').textContent = ''

    fetch (`http://localhost:3000/weather?address=${location}`).then ((response) => {
        response.json().then ((data) => {
            if (data.error) document.querySelector('#message1').textContent = data.error
            else {
                document.querySelector('#message1').textContent = data.forecastInfo
                document.querySelector('#message2').textContent = data.locationInfo
            }
    })
})
})
