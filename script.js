// login functionality
document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const mobileNumberInput = document.getElementById('mobile-number-input')
    const pinNumberInput = document.getElementById('pin-number-input')

    console.log(mobileNumberInput.value);
    console.log(pinNumberInput.value);

    if (parseInt(mobileNumberInput.value) === mobileNumber && parseInt(pinNumberInput.value) === pinNumber)
        window.location.href = './home.html'
    else
        alert('Invalid mobile number or pin')

})