
document.querySelector('#deposit-button').addEventListener('click', function () {
    const currentInput=currentBalanceUpdate('#previous-deposit','#current-deposit');
    totalBalanceUpdate(currentInput)
})

