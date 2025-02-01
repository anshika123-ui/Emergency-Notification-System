// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the form element and register a submit event listener
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Get the values of the input fields
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const userLocation = document.getElementById('user-location').value;
        
        // Validate the form fields
        if (name === '' || contact === '' || userLocation === '') {
            alert('Please fill out all fields!');
            return;
        }

        // Simulate registration process
        const registrationData = {
            name: name,
            contact: contact,
            location: userLocation
        };

        console.log('User Registered:', registrationData); // For debugging purposes

        // Clear the form inputs after submission
        form.reset();
        
        // Display a confirmation message to the admin
        alert(`User Registered Successfully!\nName: ${name}\nContact: ${contact}\nLocation: ${userLocation}`);
    });
    
});
