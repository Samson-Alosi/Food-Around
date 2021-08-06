$('form.myForm').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    alert("Hello " + name + " ,Thank You for Contacting Us.");
});
