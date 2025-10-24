let message = document.getElementById('confirmation');
let submitButton = document.getElementById('submit');
let form = document.getElementById('contact-form');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(form);
    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(formData => {
        message.innerHTML = "Your message has been sent successfully!";
        message.style.color = "green";
        form.reset(); // Clear the form
    })
    .catch(error => {
        message.innerHTML = "Your message has failed to send.";
        message.style.color = "red";
        form.reset(); // Clear the form
    });
    
});