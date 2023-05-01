const modalEl = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const declineBtn = document.querySelector('#modal-choice-btns button:last-child')

setTimeout( () => {
    modalEl.style.display = 'block'
}, 3000)

modalCloseBtn.addEventListener('click', () => {
    modalEl.style.display = 'none'
})

console.log(declineBtn)

declineBtn.addEventListener('mouseover', () => {
    document.getElementById('modal-choice-btns').classList.toggle('reverse')
})




consentForm.addEventListener('submit', e => {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    console.log(consentFormData)
    const name = consentFormData.get('full-name')
    console.log(name)

    const email = consentFormData.get('email')
    console.log(email)


    document.getElementById('modal-text').innerHTML =
    `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `
    setTimeout(() => {
        document.getElementById('uploadText').innerText =
        `
            Making the sale...
        `
    },2000)

    setTimeout(() => {
     


        document.getElementById('modal-inner').innerHTML = 
        `
        <h2>Thanks, ${name} we sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/bugatti.jpg">
        </div>
        `
        modalCloseBtn.disabled = false
    }, 4000)
})

