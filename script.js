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
    event.preventDefault(); 

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


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===== scroll sections active link=======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;   
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*======sticky navbar======*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*===== remove menu icon navbar when click navbar link (scroll) =====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*======= dark light mode =====*/
const darkModeIcon = document.querySelector('#darkMode-icon');

if (darkModeIcon) {
    darkModeIcon.addEventListener('click', () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    });
}

/*======== scroll reveal ====*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p .about-content', {
    origin: 'right'
});
document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,  // Enable looping
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        slidesPerView: 1,  // Display 1 slide at a time
        spaceBetween: 30   // Add space between slides if needed
    },
});
});
// Custom pagination control
document.querySelectorAll('.custom-pagination-btn').forEach(button => {
    button.addEventListener('click', function () {
      var slideIndex = this.getAttribute('data-slide');
      swiper.slideTo(slideIndex); // Slide to the corresponding index
    });
  });