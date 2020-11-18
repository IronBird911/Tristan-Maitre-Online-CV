function validateForm() {
        var name = document.forms["Contact"]["inputName"].value;
        var mail = document.forms["Contact"]["inputEmail"].value;
        var message = document.forms["Contact"]["body"].value;
        var errorMessage = "";
        if (name == "") {
    errorMessage += "Name must be filled out - ";
        }
        if (mail.length < 1) {
    errorMessage += "Invalid E-Mail - ";
        }
        if (message.length < 1) {
    errorMessage += "Please write a short message";
        }
        if (errorMessage === "") {
    alert('Thanks for your message, ' + name + '! You will now be redirected to your mail client to send your E-mail')
            return true
        }
        else {
    alert(errorMessage);
            return false
        }
    }