// ================= CONTACT FORM VALIDATION =================


const contactForm = document.getElementById("contactForm");


if(contactForm){


contactForm.addEventListener("submit", function(e){

    e.preventDefault();


    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");


    const errors = document.querySelectorAll(".input-group small");


    // Clear old errors

    errors.forEach(error => {

        error.textContent = "";

    });



    let valid = true;



    // Name validation

    if(name.value.trim() === ""){

        name.nextElementSibling.textContent =
        "Please enter your name";

        valid = false;

    }



    // Email validation

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(email.value.trim() === ""){

        email.nextElementSibling.textContent =
        "Please enter your email";

        valid = false;

    }

    else if(!emailPattern.test(email.value)){

        email.nextElementSibling.textContent =
        "Enter a valid email address";

        valid = false;

    }



    // Phone validation

    const phonePattern = /^[0-9]{10}$/;


    if(phone.value.trim() === ""){

        phone.nextElementSibling.textContent =
        "Please enter phone number";

        valid = false;

    }

    else if(!phonePattern.test(phone.value)){

        phone.nextElementSibling.textContent =
        "Enter a valid 10 digit phone number";

        valid = false;

    }



    // Message validation


    if(message.value.trim() === ""){

        message.nextElementSibling.textContent =
        "Please enter your message";

        valid = false;

    }

    else if(message.value.length < 10){

        message.nextElementSibling.textContent =
        "Message should contain minimum 10 characters";

        valid = false;

    }



    // Success message

    if(valid){

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    }


});


}