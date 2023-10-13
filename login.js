window.onload = alert(`User this email and password to login- 
Email: uzzal@gmail.com 
Pass: 1234`)

document.querySelector("input[type='submit']").addEventListener('click', function (e) {
    e.preventDefault();

    const userEmail = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;
    if (userEmail === 'uzzal@gmail.com' && password === '1234') {

        window.location = 'index.html';
    }
    else {
        alert('Try correct email and password')
    }
})