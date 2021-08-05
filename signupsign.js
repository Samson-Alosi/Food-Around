/*jshint esversion: 6 */
$('form#sign').submit(function (event) {
    event.preventDefault();
    var email = $('#typeEmail').val();
    var password1 = $('#typePassword1').val();
    var password2 = $('#typePassword2').val();
    if (password1 !== password2) {
        alert("Passwords do not match, re-enter password.");
    } else {
        alert("Thank you for registering with us.");
        var confirmLogin = confirm("Do you want to log in?");

        // var isContinue = false;
        // if (confirmLogin === "OK") {
        //     isContinue = true;
        //     alert("Log in Here.");
        // } else {
        //     alert("You have an account with Food Around");
        // }
    }
});

$('form#login').submit(function(event){
    event.preventDefault();
    var username = $('#Username').val();
    var password = $ ('#Password').val();
    alert("Log in Successful. Welcome.");
});







