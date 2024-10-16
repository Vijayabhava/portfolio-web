
$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
 
});
document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const roleText = document.getElementById("role-text");

    // Arrays of names and roles to cycle through
    const names = ["Sumit Sharma","Tech Developer", "Web Designer","Cse UnderGrad", "Software Engineer"];
    
    let nameIndex = 0; // Initialize name index
    let roleIndex = 0; // Initialize role index

    function changeText() {
        // Update the text
        dynamicText.textContent = names[nameIndex];
        // roleText.textContent = roles[roleIndex];

        // Increment indexes
        nameIndex = (nameIndex + 1) % names.length; // Loop back to the start
        // roleIndex = (roleIndex + 1) % roles.length; // Loop back to the start
    }

    // Change text every 3 seconds
    setInterval(changeText, 3000);

    // Initialize the text
    changeText();
});

$(document).ready(function(){

  // Sidebar Toggle for Mobile
  $('#menu').click(function(){
      $('.sidebar').toggleClass('active');
      $(this).toggleClass('fa-times');
  });

  // Close sidebar when a link is clicked (for mobile)
  $('.sidebar-nav ul li a').click(function(){
      if($(window).width() <= 768){
          $('.sidebar').removeClass('active');
          $('#menu').removeClass('fa-times');
      }
  });

  // Remove sidebar toggle on window resize if necessary
  $(window).on('resize', function(){
      if($(window).width() > 768){
          $('.sidebar').removeClass('active');
          $('#menu').removeClass('fa-times');
      }
  });

  // Show or hide "Back to Top" button based on scroll position
  $(window).on('scroll', function(){
      if($(window).scrollTop() > 300){
          $('.top').fadeIn();
      } else{
          $('.top').fadeOut();
      }
  });

  // Smooth scrolling for all anchor links
  $('a[href*="#"]').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop : $($(this).attr('href')).offset().top - 50, // Adjust for fixed sidebar height
      }, 500, 'linear');
  });

  // Smooth scroll for "Back to Top" button
  $('.top').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '500', 'linear');
  });

  // Preloader handling
  var loader = document.querySelector("#loader");
  window.addEventListener("load", function(){
      loader.classList.add('hidden');
      // Optionally, remove the loader from the DOM after transition
      setTimeout(function(){
          loader.style.display = 'none';
      }, 500); // Match the CSS transition duration
  });

  // Theme Toggle Functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('theme');

  // Initialize theme based on saved preference
  if(currentTheme === 'dark'){
      document.body.classList.add('dark-theme');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      if(document.body.classList.contains('dark-theme')){
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          localStorage.setItem('theme', 'dark');
      } else{
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          localStorage.setItem('theme', 'light');
      }
  });

  // Initialize AOS
  AOS.init({
      offset: 200,
      duration: 2000,
  });

  // Optional: Custom form submission handling with Formspree (AJAX)
  /*
  $('form').on('submit', function(e){
      e.preventDefault();
      $.ajax({
          url: 'https://formspree.io/f/xyyaygga',
          method: 'POST',
          data: $(this).serialize(),
          dataType: 'json',
          success: function(){
              alert('Thank you for your message!');
              $('form').trigger("reset");
          },
          error: function(){
              alert('There was an error sending your message. Please try again later.');
          }
      });
  });
  */

});
