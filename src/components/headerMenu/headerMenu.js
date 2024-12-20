window.toggleDropdown = function () {
  const dropdown = document.querySelector('.header-dropdown-btn');
  
  // Toggle the 'show' class to trigger CSS transitions
  dropdown.classList.toggle('show');
};

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.header-dropdown-btn');
  const button = document.querySelector('button[onclick="toggleDropdown()"]'); // Select the button with the toggle function

  // Check if the click is outside the dropdown and button
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});
