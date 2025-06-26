// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const fileInput = document.getElementById('picture');
    const fileInfo = document.querySelector('.file-info');

    // Handle file selection
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Check if the file is an image
                if (!file.type.startsWith('image/')) {
                    alert('Please select an image file.');
                    fileInput.value = '';
                    fileInfo.textContent = '';
                    return;
                }

                // Check file size (limit to 5MB)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (file.size > maxSize) {
                    alert('Please select an image smaller than 5MB.');
                    fileInput.value = '';
                    fileInfo.textContent = '';
                    return;
                }

                // Display file information
                const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                fileInfo.textContent = `Selected: ${file.name} (${fileSizeMB}MB)`;
            } else {
                fileInfo.textContent = '';
            }
        });
    }

    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const picture = fileInput.files[0];
            
            // Here you would typically send this data to a server using FormData
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            if (picture) {
                formData.append('picture', picture);
            }
            
            // For demonstration, log the data
            console.log('Form submitted:', {
                name,
                email,
                message,
                picture: picture ? picture.name : 'No picture attached'
            });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form and file info
            contactForm.reset();
            fileInfo.textContent = '';
        });
    }
});