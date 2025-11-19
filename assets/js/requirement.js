document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default submission
    let form = e.target;
    let valid = true;

    // Clear previous error messages
    form.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // -------------------------------
    // Name: required + letters & spaces only
    const name = form.name.value.trim();
    if(name === '') {
        form.name.nextElementSibling.textContent = 'Name is required';
        valid = false;
    } else if(!/^[a-zA-Z\s]+$/.test(name)) {
        form.name.nextElementSibling.textContent = 'Name can contain only letters and spaces';
        valid = false;
    }

    // Phone: required + exactly 10 digits
    const phone = form.phone.value.trim();
    if(phone === '') {
        form.phone.nextElementSibling.textContent = 'Phone number is required';
        valid = false;
    } else if(!/^\d{10}$/.test(phone)) {
        form.phone.nextElementSibling.textContent = 'Phone number must be 10 digits';
        valid = false;
    }

    // Email: required + valid email format
    const email = form.email.value.trim();
    if(email === '') {
        form.email.nextElementSibling.textContent = 'Email is required';
        valid = false;
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.email.nextElementSibling.textContent = 'Enter a valid email';
        valid = false;
    }

    // Message: required
    const message = form.message.value.trim();
    if(message === '') {
        form.message.nextElementSibling.textContent = 'Message is required';
        valid = false;
    }
    

    // Submit form if all validations pass
    if(valid) {
        form.submit();
    }
});
