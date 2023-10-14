const currentBalanceUpdate = function (previouBalanceId, currentInputId) {
    const previousBalanceString = document.querySelector(previouBalanceId);
    const previousBalance = parseInt(previousBalanceString.innerText);
    const currentInputBalance = parseInt(document.querySelector(currentInputId).value);
    if (isNaN(currentInputBalance) || currentInputBalance < 1) {
        alert("Invalid input!!");
        document.querySelector(currentInputId).value = '';
    }
    else {
        const currentBalance = previousBalance + currentInputBalance;
        previousBalanceString.innerText = currentBalance;
        document.querySelector(currentInputId).value = '';
        return currentInputBalance;
    }
}
//Update totalBalance
const totalBalanceUpdate = function (updatedBalance) {
    const previousTotalString = document.querySelector('#total-balance');
    console.log(previousTotalString);
    const previousTotal = parseInt(previousTotalString.innerText);
    console.log(previousTotal, updatedBalance);
    if (updatedBalance < 1) {
        if (previousTotal < Math.abs(updatedBalance)) {
            alert("Sorry you don't have enough money to withdraw. Please deposit first.")
            return;
        }
    }
    console.log('dd', previousTotal);
    const totalBalance = previousTotal + updatedBalance;
    previousTotalString.innerText = totalBalance;
}
