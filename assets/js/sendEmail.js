function sendMail(contactForm) {
    emailjs.send("gmail","cawcaw",{
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "email_content":contactForm.emailcawntent.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            location.reload();
       },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}


/* put response in browser and figure out how to clear form after submission*/