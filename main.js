// Function to open WhatsApp with a predefined message
function openWhatsApp(message) {
    const phoneNumber = "917017782697"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  }

  // Get elements
const videoButton = document.getElementById('videoButton');
const videoPopup = document.getElementById('videoPopup');
const closeButton = document.getElementById('closeButton');

// Show video popup
videoButton.addEventListener('click', () => {
  videoPopup.style.display = 'flex';
});

// Close video popup
closeButton.addEventListener('click', () => {
  videoPopup.style.display = 'none';
});

  
  // Add event listeners to "Check Availability" buttons
  const checkAvailabilityButtons = document.querySelectorAll(".booking_btn, .bonfire_btn");
  checkAvailabilityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openWhatsApp("Hi, I would like to check availability for camping.");
    });
  });
  
  // Add event listener to the header button
  /*const headerButton = document.querySelector(".header_btn");
  headerButton.addEventListener("click", () => {
    alert("Watch this video functionality coming soon!");
  });*/
  
  // Add event listeners to "Read More" links in the blog section
  const blogLinks = document.querySelectorAll(".blog_link");
  blogLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "blog-post.html"; // Redirect to the blog post page
    });
  });
  
  // Add event listener to the About page navigation link
  const aboutLink = document.querySelector(".nav_link[href='about.html']");
  if (aboutLink) {
    aboutLink.addEventListener("click", () => {
      console.log("Navigating to About page");
    });
  }
  // Handle the form submission and display the booking confirmation
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dates = document.getElementById("dates").value;
  
    // Display a confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = `Thank you, ${name}! Your booking for the dates ${dates} has been confirmed. We will contact you at ${email} or ${phone} shortly.`;
  
    // Clear the form after submission
    document.getElementById("bookingForm").reset();

    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }


// Function to fetch live location
function fetchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, handleError);
  } else {
    document.getElementById("location").textContent = "Geolocation is not supported by this browser.";
  }
}

// Function to display the location
function showLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  document.getElementById("location").textContent = `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`;
}

// Function to handle errors in case geolocation fails
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("location").textContent = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("location").textContent = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      document.getElementById("location").textContent = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("location").textContent = "An unknown error occurred.";
      break;
  }
}

// Call the function to fetch live location when the page loads
window.onload = fetchLocation;


    
  });
  
  