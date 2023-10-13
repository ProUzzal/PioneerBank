
const currentBalanceUpdate = function (previouBalanceId, currentInputId) {
    const previousBalanceString = document.querySelector(previouBalanceId);
    const previousBalance = parseInt(previousBalanceString.innerText);

    const currentInputBalance = parseInt(document.querySelector(currentInputId).value);
    const currentBalance = previousBalance + currentInputBalance;
    previousBalanceString.innerText = currentBalance;
    document.querySelector(currentInputId).value='';
    return currentInputBalance;

}


//Update totalBalance
const totalBalanceUpdate = function (updatedBalance) {
    const previousTotalString = document.querySelector('#total-balance');
    console.log(previousTotalString);
    const previousTotal = parseInt(previousTotalString.innerText);
    console.log(previousTotal);
    const totalBalance = previousTotal + updatedBalance;
    previousTotalString.innerText = totalBalance;
}
