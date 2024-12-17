let currentlyOpenDropdown = null;

// Function to handle opening and closing dropdowns
function toggleDropdown(dropdown) {
  const isOpen = dropdown.classList.contains('open');

  // Close any open dropdown
  const allDropdowns = document.querySelectorAll('.dropdown');
  allDropdowns.forEach(d => d.classList.remove('open'));

  // If this dropdown wasn't open, open it
  if (!isOpen) {
    dropdown.classList.add('open');
  }

  // Update the currently open dropdown
  currentlyOpenDropdown = dropdown.classList.contains('open') ? dropdown : null;
}

// Function to close dropdowns when clicking outside
function closeDropdownsOnClickOutside(event) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
    }
  });

  // Reset the currently open dropdown if clicked outside
  currentlyOpenDropdown = null;
}

// Add event listeners for all dropdown buttons
document.querySelectorAll('.dropdown-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to the document
    const dropdown = button.closest('.dropdown');
    toggleDropdown(dropdown);
  });
});

// Add event listeners for dropdown options (acting as buttons)
document.querySelectorAll('.dropdown-option').forEach(option => {
  option.addEventListener('click', function() {
    alert(`You clicked ${option.textContent}`);
    // Here, you can replace the alert with any custom action you'd like
    // For example, navigation or triggering a function
    const dropdown = option.closest('.dropdown');
    dropdown.classList.remove('open'); // Close the dropdown after selecting an option
  });
});

// Event listener to close dropdown when clicking outside
document.addEventListener('click', closeDropdownsOnClickOutside);
