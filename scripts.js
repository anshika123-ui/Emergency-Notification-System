// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function () {
    // Select the alert form and sent notifications table
    const form = document.querySelector('.alert-form form');
    const messageInput = document.getElementById('message');
    const locationInput = document.getElementById('location');
    const notificationsTableBody = document.querySelector('.sent-notifications tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the values of the form inputs
        const message = messageInput.value;
        const location = locationInput.value;

        // Validate the form fields
        if (message.trim() === '' || location.trim() === '') {
            alert('Please provide both a message and a location!');
            return;
        }

        // Create a new row for the sent notification table
        const newRow = document.createElement('tr');

        // Create table data elements for message, location, and status
        const messageCell = document.createElement('td');
        messageCell.textContent = message;

        const locationCell = document.createElement('td');
        locationCell.textContent = location;

        const statusCell = document.createElement('td');
        statusCell.textContent = 'Pending...'; // Set status to 'Pending' initially

        // Append the new cells to the row
        newRow.appendChild(messageCell);
        newRow.appendChild(locationCell);
        newRow.appendChild(statusCell);

        // Add the new row to the table body
        notificationsTableBody.appendChild(newRow);

        // Clear the form inputs
        form.reset();

        // Simulate a delayed status update (e.g., delivered after a few seconds)
        setTimeout(() => {
            statusCell.textContent = 'Delivered'; // Update status to 'Delivered' after 3 seconds
        }, 3000);

        // Optionally, add functionality to simulate a failed notification
        // setTimeout(() => {
        //     statusCell.textContent = 'Failed'; // Update status to 'Failed' after 3 seconds
        // }, 3000);
    });
});
