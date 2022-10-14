const budget = document.querySelector('#budget')
const price = document.querySelector('#price')
const tax = document.querySelector('#sales-tax')
const title = document.querySelector('#title')
const reg = document.querySelector('#registration')

const announcement = document.querySelector('#announcement')
const message = document.querySelector('#message')

const sbmt_btn = document.querySelector('.submit')

sbmt_btn.addEventListener('click', (e) => {
    // (1 + t)x + l + r = b
    const dmv_fee = (parseInt(title.value) + parseInt(reg.value));
    const dmv_tax = (1.0 + parseFloat(tax.value));
    const total_fee = (parseInt(price.value)*dmv_tax) + dmv_fee

    const rem = parseInt(budget.value) - total_fee
    
    if (isNaN(total_fee)) return
    message.innerText = `You Can Afford A Whopping $${total_fee}! You will have $${rem} left.`
    announcement.style.display = 'block';
})