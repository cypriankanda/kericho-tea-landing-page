// Initialize when document is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded successfully');
    // Initialize all interactive elements
    initializeNavigation();
    initializeProductInteractions();
    initializeContactForm();
    initializeGallery();
});

function initializeNavigation() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function initializeProductInteractions() {
    // Add hover effects and click interactions for products
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.style.transform = 'scale(1.05)';
            product.style.transition = 'transform 0.3s ease';
        });

        product.addEventListener('mouseleave', () => {
            product.style.transform = 'scale(1)';
        });

        product.addEventListener('click', () => {
            const productName = product.querySelector('h3').textContent;
            showProductDetails(productName);
        });
    });
}

function showProductDetails(productName) {
    // Simple alert for now - could be enhanced to show a modal
    alert(`${productName} - Coming soon! Check back for more details about this product.`);
}

function initializeContactForm() {
    const form = document.querySelector('#contact form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (validateForm(name, email, message)) {
            // Here you would typically send the data to your server
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        }
    });
}

function validateForm(name, email, message) {
    if (name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }
    
    return true;
}

function initializeGallery() {
    // Add click functionality to gallery images
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Create fullscreen preview
            const fullscreen = document.createElement('div');
            fullscreen.className = 'fullscreen-preview';
            fullscreen.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            `;
            
            const largeImage = document.createElement('img');
            largeImage.src = img.src;
            largeImage.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            `;
            
            fullscreen.appendChild(largeImage);
            document.body.appendChild(fullscreen);
            
            fullscreen.addEventListener('click', () => {
                fullscreen.remove();
            });
        });
    });
}

// Add your JavaScript code here 