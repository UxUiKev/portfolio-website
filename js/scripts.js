function menuToggle() {
    const nav = document.querySelector('.navtoggle');
    const menuIcon = document.getElementById('menuIcon');

    // Toggle the 'open' class to show/hide menu items
    nav.classList.toggle('open');

    // Change the icon to 'X' when the menu is open, back to 'bars' when closed
    if (nav.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Show button when scrolled down 100px from the top of the page
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Scroll to the top smoothly when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}