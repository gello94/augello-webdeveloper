//EmailJs 
function sendMail(contactForm) {
    emailjs.send("gmail", "buyit", {
            "from_name": contactForm.inputName.value,
            "from_email": contactForm.inputEmail.value,
            "number": contactForm.inputPhone.value,
            "object": contactForm.inputSubject.value,
            "enquiry": contactForm.inputMessage.value
        })
        .then(
            function (response) {
                var alert = '<div class="alert alert-success" role="alert"> Your message has been sent.You will receive an answer as soon as possible.</div>'
                document.getElementById("email-alert").innerHTML = alert;
            },
            function (error) {
                var alert = '<div class="alert alert-danger" role="alert">Your message was not sent. Please check that all the details are correct.</div>'
                document.getElementById("email-alert").innerHTML = alert;
            }
        );
    return false; // To block from loading a new page
}

