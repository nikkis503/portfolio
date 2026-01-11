// This file contains JavaScript code for interactivity on the website.
// It includes form validation, event listeners, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let valid = true;

        if (name === '') {
            alert('Name is required.');
            valid = false;
        }
        if (email === '') {
            alert('Email is required.');
            valid = false;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }
        if (message === '') {
            alert('Message is required.');
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});