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
document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href = './index.html'
})

//Toggle feature functionality
const addMoneyOption = document.getElementById('add-money-option')
const cashoutMoneyOption = document.getElementById('cashout-money-option')


addMoneyOption.addEventListener('click', function () {
    addMoneyOption.classList.add('border-class')
    cashoutMoneyOption.classList.remove('border-class')
    document.getElementById('cashout-money-form').style.display = 'none'
    document.getElementById('add-money-form').style.display = 'block'
})

cashoutMoneyOption.addEventListener('click', function () {
    cashoutMoneyOption.classList.add('border-class')
    addMoneyOption.classList.remove('border-class')
    document.getElementById('add-money-form').style.display = 'none'
    document.getElementById('cashout-money-form').style.display = 'block'
})