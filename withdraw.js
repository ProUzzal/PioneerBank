document.querySelector('#withdraw-button').addEventListener('click', function () {
    const currentInputAmount = parseInt(document.querySelector('#current-withdraw').value);

    const totalBalance = parseInt(document.querySelector('#total-balance').innerText);
    console.log(totalBalance);
    if (isNaN(currentInputAmount)) {
        alert('Invalid input');
        document.querySelector('#current-withdraw').value = '';
    }
    else if (currentInputAmount <= totalBalance) {
        const currentInput = currentBalanceUpdate('#previous-withdraw', '#current-withdraw');
        if (currentInput != undefined) {
            totalBalanceUpdate((-currentInput));
        }
    }
    else {
        alert(" Withdraw amount can not be bigger than your total balance. Deposit first then withdraw")
        document.querySelector('#current-withdraw').value = '';
    }


})

