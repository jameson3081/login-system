function validateResetPassword() {
    var pwd = document.getElementById("newpassword").value;
    var cpwd = document.getElementById("cnewpassword").value;
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (pwd == '') {
        alert('Please enter new Password');
    }
    else if (cpwd == '') {
        alert('Re-Enter your Password');
    }
    else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if (pwd != cpwd) {
        alert('Password not Matched');
    }
    else if (document.getElementById("cnewpassword").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("cnewpassword").value.length > 10) {
        alert('Password max length is 12');
    }
    else {
        window.location.href = "/ResetPassword";
    }
}
