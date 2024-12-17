let currentlyOpenDropdown = null;

// Function to handle opening and closing dropdowns
function toggleDropdown(dropdown) {
  const isOpen = dropdown.classList.contains('open');

  // Close any open dropdown
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));

  // If this dropdown wasn't open, open it
  if (!isOpen) {
    dropdown.classList.add('open');
  }

  // Update the currently open dropdown
  currentlyOpenDropdown = dropdown.classList.contains('open') ? dropdown : null;
}

// Function to close dropdowns when clicking outside
function closeDropdownsOnClickOutside(event) {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
    }
  });
  currentlyOpenDropdown = null;
}

// Add event listeners for dropdown buttons
document.querySelectorAll('.dropdown-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior (important for links or buttons)
    event.stopPropagation(); // Stop event from bubbling to parent elements
    const dropdown = button.closest('.dropdown');
    toggleDropdown(dropdown);
  });
});

// Event listener to close dropdown when clicking outside
document.addEventListener('click', closeDropdownsOnClickOutside);
