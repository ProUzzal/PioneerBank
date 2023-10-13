document.querySelector('#withdraw-button').addEventListener('click', function () {
    const currentAfterInput = currentBalanceUpdate('#previous-withdraw', '#current-withdraw');
    totalBalanceUpdate((-currentAfterInput))
})

