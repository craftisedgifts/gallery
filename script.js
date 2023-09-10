
// Function to open the product popup
function openPopup(imageSrc, imageAlt) {   const popup = document.getElementById('productPopup');  const popupProduct = document.getElementById('popupProduct'); popupProduct.src = imageSrc; popupProduct.alt = imageAlt; popup.style.display = 'flex'; }
// Function to close the product popup
function closePopup() { const popup = document.getElementById('productPopup'); popup.style.display = 'none';}
// Get all card elements with the "product-card" class
const productCards = document.querySelectorAll('.product-card');
// Add click event listeners to the product cards
productCards.forEach(card => { card.addEventListener('click', () => { const imageSrc = card.querySelector('data-link').getAttribute('data-link'); const imageAlt = card.querySelector('data-link').getAttribute('data-link'); openPopup(imageSrc, imageAlt);    }); });
// Function to toggle the category dropdown
function toggleDropdown(dropdown) { dropdown.classList.toggle('active');
}
// Get all menu toggle buttons
const menuToggleButtons = document.querySelectorAll('.menu-toggle');
// Add click event listeners to the menu toggle buttons
menuToggleButtons.forEach(button => { button.addEventListener('click', () => { const dropdown = button.nextElementSibling.nextElementSibling; toggleDropdown(dropdown); }); });
// Get all category dropdowns
const categoryDropdowns = document.querySelectorAll('.category-dropdown');
// Add change event listeners to the category dropdowns
categoryDropdowns.forEach(dropdown => { dropdown.addEventListener('change', () => { const selectedCategory = dropdown.value; if (selectedCategory !== '#') { window.location.href = selectedCategory; } }); });
// Get all buttons with the "card-button" attribute
const buttons = document.querySelectorAll('[data-link]');
// Add click event listeners to the buttons
buttons.forEach(button => { button.addEventListener('click', () => {
// Get the target link from the button's data-link attribute
const targetLink = button.getAttribute('data-link');
// Redirect to the target link
window.location.href = targetLink;
});
});
document.getElementById('whatsappButton').addEventListener('click', function() {
    // Define your WhatsApp number and a message (customize as needed)
    const whatsappNumber = '916265339647';
    const message = 'Hello, I would like to place an order.';
  
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp in a new tab
    window.open(whatsappURL);
  });


