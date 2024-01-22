
// Function to open the product popup
function openPopup(imageSrc, imageAlt) { const popup = document.getElementById('productPopup'); const popupProduct = document.getElementById('popupProduct'); popupProduct.src = imageSrc; popupProduct.alt = imageAlt; popup.style.display = 'flex'; }
// Function to close the product popup
function closePopup() { const popup = document.getElementById('productPopup'); popup.style.display = 'none'; }
// Get all card elements with the "product-card" class
const productCards = document.querySelectorAll('.product-card');
// Add click event listeners to the product cards
productCards.forEach(card => { card.addEventListener('click', () => { const imageSrc = card.querySelector('data-link').getAttribute('data-link'); const imageAlt = card.querySelector('data-link').getAttribute('data-link'); openPopup(imageSrc, imageAlt); }); });
// Function to toggle the category dropdown
function toggleDropdown(dropdown) {
  dropdown.classList.toggle('active');
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
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the target link from the button's data-link attribute
    const targetLink = button.getAttribute('data-link');
    // Redirect to the target link
    window.location.href = targetLink;
  });
});
document.getElementById('whatsappButton').addEventListener('click', function () {
  // Define your WhatsApp number and a message (customize as needed)
  const whatsappNumber = '916265339647';
  const message = 'Hello, I would like to place an order.';

  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in a new tab
  window.open(whatsappURL);
});
document.addEventListener('DOMContentLoaded', function () {
  let currentBannerIndex = 0;
  let banners;
  let totalBanners;
  let interval;

  function displayBanner(index, className) {
    const bannerEls = document.querySelectorAll(className);
    bannerEls.forEach((banner, i) => {
      if (i === index) {
        banner.classList.add('active');
      } else {
        banner.classList.remove('active');
      }
    });
  }

  function showNextBanner(className) {
    currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
    displayBanner(currentBannerIndex, className);
  }

  function setBannerClass() {
    if (window.innerWidth <= 620) {
      banners = document.querySelectorAll('.banner-mobile');
      totalBanners = banners.length;
      displayBanner(0, '.banner-mobile');
      if (interval) clearInterval(interval); // Clear the previous interval
      interval = setInterval(() => {
        showNextBanner('.banner-mobile');
      }, 6000);
    } else {
      banners = document.querySelectorAll('.banner');
      totalBanners = banners.length;
      displayBanner(0, '.banner');
      if (interval) clearInterval(interval); // Clear the previous interval
      interval = setInterval(() => {
        showNextBanner('.banner');
      }, 3000);
    }
  }

  // Set initial banner based on screen size
  setBannerClass();

  // Adjust slideshow on window resize
  window.addEventListener('resize', setBannerClass);
});

function closeBlackBoxPopup() {
  const blackBoxPopup = document.getElementById('blackBoxPopup');
  blackBoxPopup.style.display = 'none';
};



// Function to open the product popup
function openPopup(imageSrc, productName, productDescription, productPrice) {
  const popup = document.getElementById('productPopup');
  const popupProduct = document.getElementById('popupProduct');
  const productNameElem = document.getElementById('productName');
  const productDescriptionElem = document.getElementById('productDescription');
  const productPriceElem = document.getElementById('productPrice');

  // Set product details
  productNameElem.textContent = productName;
  productDescriptionElem.textContent = productDescription;
  productPriceElem.textContent = productPrice;

  popupProduct.src = imageSrc;
  popupProduct.alt = productName;
  popup.style.display = 'flex';

  // Store product details in the popup for later use
  popup.dataset.productName = productName;
  popup.dataset.productDescription = productDescription;
  popup.dataset.productPrice = productPrice;
}


// Function to handle "Buy Now" button click
function buyNow() {
  const popup = document.getElementById('productPopup');
  const whatsappNumber = '916265339647'; // Replace with your owner's WhatsApp number

  // Create the WhatsApp message
  const message = `Hello, I would like to buy\n\nProduct Image: ${window.location.origin}${document.getElementById('popupProduct').src}`;

  // Create the WhatsApp URL with the message
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in a new tab
  window.open(whatsappURL);

  // Close the popup after clicking "Buy Now"
  closePopup();
}



// **

// // Function to open the product popup
// function openPopup(imageSrc, imageAlt) {   const popup = document.getElementById('productPopup');  const popupProduct = document.getElementById('popupProduct'); popupProduct.src = imageSrc; popupProduct.alt = imageAlt; popup.style.display = 'flex'; }
// // Function to close the product popup
// function closePopup() { const popup = document.getElementById('productPopup'); popup.style.display = 'none';}
// // Get all card elements with the "product-card" class
// const productCards = document.querySelectorAll('.product-card');
// // Add click event listeners to the product cards
// productCards.forEach(card => { card.addEventListener('click', () => { const imageSrc = card.querySelector('data-link').getAttribute('data-link'); const imageAlt = card.querySelector('data-link').getAttribute('data-link'); openPopup(imageSrc, imageAlt);    }); });
// // Function to toggle the category dropdown
// function toggleDropdown(dropdown) { dropdown.classList.toggle('active');
// }
// // Get all menu toggle buttons
// const menuToggleButtons = document.querySelectorAll('.menu-toggle');
// // Add click event listeners to the menu toggle buttons
// menuToggleButtons.forEach(button => { button.addEventListener('click', () => { const dropdown = button.nextElementSibling.nextElementSibling; toggleDropdown(dropdown); }); });
// // Get all category dropdowns
// const categoryDropdowns = document.querySelectorAll('.category-dropdown');
// // Add change event listeners to the category dropdowns
// categoryDropdowns.forEach(dropdown => { dropdown.addEventListener('change', () => { const selectedCategory = dropdown.value; if (selectedCategory !== '#') { window.location.href = selectedCategory; } }); });
// // Get all buttons with the "card-button" attribute
// const buttons = document.querySelectorAll('[data-link]');
// // Add click event listeners to the buttons
// buttons.forEach(button => { button.addEventListener('click', () => {
// // Get the target link from the button's data-link attribute
// const targetLink = button.getAttribute('data-link');
// // Redirect to the target link
// window.location.href = targetLink;
// });
// });
// document.getElementById('whatsappButton').addEventListener('click', function() {
//     // Define your WhatsApp number and a message (customize as needed)
//     const whatsappNumber = '916265339647';
//     const message = 'Hello, I would like to place an order.';
  
//     // Create the WhatsApp URL
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
//     // Open WhatsApp in a new tab
//     window.open(whatsappURL);
//   });
//   document.addEventListener('DOMContentLoaded', function () {
//     let currentBannerIndex = 0;
//     let banners;
//     let totalBanners;
//     let interval;
  
//     function displayBanner(index, className) {
//       const bannerEls = document.querySelectorAll(className);
//       bannerEls.forEach((banner, i) => {
//         if (i === index) {
//           banner.classList.add('active');
//         } else {
//           banner.classList.remove('active');
//         }
//       });
//     }
  
//     function showNextBanner(className) {
//       currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
//       displayBanner(currentBannerIndex, className);
//     }
  
//     function setBannerClass() {
//       if (window.innerWidth <= 620) {
//         banners = document.querySelectorAll('.banner-mobile');
//         totalBanners = banners.length;
//         displayBanner(0, '.banner-mobile');
//         if (interval) clearInterval(interval); // Clear the previous interval
//         interval = setInterval(() => {
//           showNextBanner('.banner-mobile');
//         }, 6000);
//       } else {
//         banners = document.querySelectorAll('.banner');
//         totalBanners = banners.length;
//         displayBanner(0, '.banner');
//         if (interval) clearInterval(interval); // Clear the previous interval
//         interval = setInterval(() => {
//           showNextBanner('.banner');
//         }, 3000);
//       }
//     }
  
//     // Set initial banner based on screen size
//     setBannerClass();
  
//     // Adjust slideshow on window resize
//     window.addEventListener('resize', setBannerClass);
//   });

// function closeBlackBoxPopup() {
// const blackBoxPopup = document.getElementById('blackBoxPopup');
// blackBoxPopup.style.display = 'none';
// };  

  
  

// **
