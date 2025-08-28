//Add money functionality
const bankAcc = 98765432100
const pin = 1234
const transactionData = []
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

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData);

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

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData);

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
const transactionMoneyOption = document.getElementById('transaction-money-option')

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

transactionMoneyOption.addEventListener('click', function () {
    toToggle('transaction-money-form', transactionMoneyOption)
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between py-[13px] px-[26px] bg-white rounded-[12px] border-[1px] border-[rgba(8,8,8,0.10)] mb-3">
                <div class="flex gap-2">
                    <div class="bg-[#0808080D] h-12 w-12 p-2 rounded-full flex items-center justify-center">
                        <img src="./assets/wallet1.png" class="h-8">
                    </div>
                    <div class="">
                        <p class="text-[16px] font-semibold text-[rgba(8,8,8,0.70)] mb-[6px]">${data.name}</p>
                        <p class="text-[12px] text-[rgba(8,8,8,0.70)]">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis fa-rotate-90 text-2xl text-[#080808B3]"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }

})
