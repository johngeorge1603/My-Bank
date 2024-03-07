function toRegister() {
    window.location= `./register-page.html`
}

function toLogin() {
    window.location= `./login-page.html`
}

// REGISTER PAGE JS

function toLogin() {
    window.location = `./login-page.html`;
}

function register() {

    // fetch values from html
    acno= acn.value;
    uname= usn.value;
    pswd= pwd.value;
    
    // create object with details
    accountDetails= {
        acno,
        uname,
        pswd,
        balance:0
    }

    // check if acno is already present
    if (acno in localStorage) {
        alert(`User already resistered`)
    }
    else if (acno=="" || uname=="" || pswd=="") {
        alert(`Please enter all details`)
    }
    // to set details in localstorage
    else {
        localStorage.setItem(acno,JSON.stringify(accountDetails));
        alert(`User Registration Successful. Proceed to Log-In`)
    }

}




// LOGIN PAGE JS

function toHome() {
    window.location= `./index.html`
}

function login() {

    acno=lacn.value;
    pswd= lpwd.value;

    if (acno in localStorage) {
        accountDetails=JSON.parse(localStorage.getItem(acno));

        if(pswd==accountDetails.pswd) {
            alert(`Login Successful`)
            window.location= `./services-page.html`
        }
        else {
            alert(`Incorrect Password`)
        }

    }
    else{
        alert(`Incorrect Account Number`)
    }

}


// SERVICES PAGE JS
function logout() {
    window.location= `./index.html`
}


function deposit() {
    let amnt=0;
    let balance=0;

    acno= depacn.value;
    amt= depamt.value;
    amt= Math.floor(amt);

    if(acno in localStorage)
    {
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if (acno==accountDetails.acno && amt<= 0){
            alert(`Value cannot be negative`)
        }
        else {
            accountDetails.balance+=amt;
            localStorage.setItem(acno,JSON.stringify(accountDetails));

            document.getElementById(`depres`).innerHTML= `
            <div style="color: red; font-weight:500;">
            Your Current Balance: Rs${accountDetails.balance}</div>`

            alert(`Rs${amt} successfuly deposited. New Balance: Rs${accountDetails.balance}`)
        }
    }
}


function withdraw() {
    let amnt=0;
    let balance=0;

    acno= witacn.value;
    amt= witamt.value;
    amt= Math.floor(amt);

    if(acno in localStorage)
    {
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if (acno==accountDetails.acno && amt<= 0){
            alert(`Value cannot be negative`)
        }
        else {
            accountDetails.balance-=amt;
            localStorage.setItem(acno,JSON.stringify(accountDetails));

            document.getElementById(`witres`).innerHTML= `
            <div style="color: red; font-weight:500;">
            Your Current Balance: Rs${accountDetails.balance}</div>`

            alert(`Rs${amt} successfuly withdrawn. New Balance: Rs${accountDetails.balance}`)
        }
    }
}

