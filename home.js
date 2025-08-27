//Add money functionality
const bankAcc = 98765432100
const pin = 1234
const availableBalance = document.getElementById('balance')
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById('bank-select-input').value
    const accNumber = parseInt(document.getElementById('acc-number-input').value)
    const amountAdd = parseFloat(document.getElementById('add-amount-input').value)
    const pinNumber = parseInt(document.getElementById('pin-number-input').value)
    let balance = parseFloat(availableBalance.innerText)

    if (accNumber === bankAcc && pinNumber === pin)
        balance += amountAdd
    else
        alert('Wrong account number or pin')
    availableBalance.innerText = (balance).toFixed(3).toString()
})

//Cashout Money functionality
document.getElementById('withdraw-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const agentNumber = document.getElementById('agent-number-input').value
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount-input').value)
    const pinWithdraw = parseInt(document.getElementById('pin-withdraw-input').value)
    let balance = parseFloat(availableBalance.innerText)

    if (agentNumber.length == 11 && pinWithdraw === pin)
        balance -= withdrawAmount
    else
        alert('Wrong agent number or pin')
    availableBalance.innerText = (balance).toFixed(3).toString()

})

//Logout functionality
document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = './index.html'
})

//Toggle feature functionality
const addMoneyOption = document.getElementById('add-money-option')
const cashoutMoneyOption = document.getElementById('cashout-money-option')
const transferMoneyOption = document.getElementById('transfer-money-option')
const bonusMoneyOption = document.getElementById('bonus-money-option')

//Funtion to toggle
function toToggle(id1, id2) {
    const form = document.getElementsByClassName('form')
    const btnOption = document.getElementsByClassName('btn-option')

    for (const val of form) {
        val.style.display = 'none'
    }
    document.getElementById(id1).style.display = 'block'

    for (const val of btnOption) {
        val.classList.remove('border-class')
    }
    id2.classList.add('border-class')
}

addMoneyOption.addEventListener('click', function () {
    toToggle('add-money-form', addMoneyOption)

})

cashoutMoneyOption.addEventListener('click', function () {
    toToggle('cashout-money-form', cashoutMoneyOption)
})

transferMoneyOption.addEventListener('click', function () {
    toToggle('transfer-money-form', transferMoneyOption)
})

bonusMoneyOption.addEventListener('click', function () {
    toToggle('bonus-money-form', bonusMoneyOption)
})
