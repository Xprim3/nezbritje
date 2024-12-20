window.toggleDropdown = function() {
  const dropdown = document.querySelector('.header-dropdown-btn');
  
  // Toggle the 'show' class to trigger CSS transitions
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }
};
