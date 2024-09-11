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
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}</br></br></br>`;
    Email.send({
      SecureToken: "28319123-7783-4622-8649-ba4adaf7384b",
      To: 'diyathokoza@gmail.com',
      From: "t0631001045@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
    }).then(
      message => {
        if (message === "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message.",
            icon: "error"
          });
        }
      }
    );
  }
  function checkInputs() {
    const items = document.querySelectorAll(".item");
    let allValid = true;
  
    for (const item of items) {
      if (item.value === "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
        allValid = false;
      }
  
      if (items[1].value != "") {
        checkEmail();
      }
      items[1].addEventListener("keyup", () => {
        checkEmail();
      });
  
      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    }
  
    return allValid;
  }
  
  function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
  
  
    if (!email.value.match(emailRegex)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");
      if (email.value != "") {
        errorTxtEmail.innerText = "Enter a valid email address";
      }
      else {
        errorTxtEmail.innerText = "Email Address can't be blank";
      }
    }
    else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputs()) {
      sendEmail();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the required fields.",
        icon: "error"
      });
    }
  
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
      sendEmail();
  
      form.reset();
      return false;
    }
  });
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const form = document.querySelector('form');
    const subject = document.getElementById("subject");
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
/*===== menu icon navbar ===*/


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
  // Check user's saved preference and apply it on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});
  // Switch between moon and sun icon on toggle
darkModeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem("theme", "dark");
    } else {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem("theme", "light");
    }
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
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',  // Auto-adjust slides to show all documents
    spaceBetween: 30,  // Add space between slides (optional)
    autoHeight: true,  // Auto adjust height based on content
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
