// Insert your code here

document.querySelector('#register').addEventListener('click', function(){
    const nameInput = document.querySelector('#registerName').value;
    const emailInput = document.querySelector('#registerEmail').value;
    const passwordInput = document.querySelector('#registerPassword').value;
    fetch('https://weatherapp-backend-beryl.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: nameInput, email: emailInput, password: passwordInput})
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign('index.html');
          }
    });
});

document.querySelector('#connection').addEventListener('click', function(){
    const emailInput = document.querySelector('#connectionEmail').value;
    const passwordInput = document.querySelector('#connectionPassword').value;
    fetch('https://weatherapp-backend-beryl.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: emailInput, password: passwordInput})
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign('index.html');
          }
    });
});