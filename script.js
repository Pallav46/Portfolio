// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed header height

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    // Close mobile menu after clicking a link
    navMenu.classList.remove('show');
  });
});

// Form validation
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // If all validations pass, you can submit the form or send the data to a server
  alert('Message sent successfully!');
  contactForm.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Scroll animation
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  })
}

// Existing code ...

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateDarkModeIcon();
  saveDarkModePreference();
});

function updateDarkModeIcon() {
  const icon = darkModeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

function saveDarkModePreference() {
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  body.classList.add('dark-mode');
  updateDarkModeIcon();
}

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Existing code ...

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Initial check for elements in view
handleScrollAnimation();


let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Downscroll
    navbar.classList.add('hidden');
  } else {
    // Upscroll
    navbar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});