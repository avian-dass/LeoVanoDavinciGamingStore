function validateForm() {
    let name = document.forms["contactForm"]["name"].value.trim();
    let email = document.forms["contactForm"]["email"].value.trim();
    let message = document.forms["contactForm"]["message"].value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thanks for reaching out! We'll get back to you shortly.");
    return true;
}