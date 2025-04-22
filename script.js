// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Check for saved preference
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️';
  }
  
  // Toggle function
  darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Update icon and save preference
      if (body.classList.contains('dark-mode')) {
          darkModeToggle.textContent = '☀️';
          localStorage.setItem('darkMode', 'enabled');
      } else {
          darkModeToggle.textContent = '🌙';
          localStorage.setItem('darkMode', 'disabled');
      }
  });
});