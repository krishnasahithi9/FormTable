const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validating form
    if (firstname === '' || lastname === '' || email === '' || subject === '' || phone === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }
    // checking to know whether all the inputs are strings.
    if (typeof firstname !== 'string' || typeof lastname !== 'string' || typeof email !== 'string' || typeof subject !== 'string' || typeof message !== 'string')
        {
        alert('Invalid input. Please enter a string.');
        return;
    }


       // Email validation.
    if (!email.includes('@') || !email.includes('.')) {
        alert('Invalid email address.');
        return;
    }
    
      // Phone number validation.
    if (phone.length !== 10 || isNaN(phone)) {
        alert('Invalid phone number.');
        return;
    }

    console.log(`Firstname: ${firstname}, Lastname: ${lastname}, Email: ${email}, Subject: ${subject}, Phone: ${phone}, Message: ${message}`);
});