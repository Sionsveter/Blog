var app = app || {};
app.requester.config('kid_-JxcTTZzkW','ad2d7f1dd9c24ced8b98942b48da54a6');

var userRequester = new app.UserRequester();

$('#registerButton').click(function(e){
    var username = $('#reg_username').val();
    //TODO hesh password
    var password = $('#reg_password').val();
    var confirmPass = $('#reg_password_confirm').val();
    var email = $('#reg_email').val();
    var fullName = $('#reg_fullname').val();
    if(password===confirmPass){
        userRequester.signUp(username,password,email,fullName);
    }
});