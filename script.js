var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Process form data (you can send it to your server here)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Show the success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Clear the form
    document.getElementById('contactForm').reset();

    alert('Your message has been sent successfully!');

    // Hide the success message after a few seconds
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
    }, 5000);
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
navToggle.addEventListener('click', function () {
    console.log('Toggle clicked');
    navMenu.classList.toggle('active');
});
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
