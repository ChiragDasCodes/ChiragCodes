// JavaScript for handling contact form submission

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    // Simulated AJAX request to send contact message
    sendMessage(name, email, message);
});

function sendMessage(name, email, message) {
    // Simulated AJAX request for sending message
    setTimeout(function() {
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        alert('Message sent successfully!');
        // Clear form fields after submission
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
    }, 1000);
}
