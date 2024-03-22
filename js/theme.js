const checkbox = document.getElementById('checkbox');

// Improved dark theme media query
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

// Function to apply or remove dark theme class
function applyDarkTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
}

// Initial application of dark theme based on system preference
applyDarkTheme(darkThemeMq.matches);

// Handle automatic theme changes based on system preference
darkThemeMq.addEventListener('change', (event) => {
  console.log(`Autotheme: ${event.matches ? 'dark' : 'light'}`);
  applyDarkTheme(event.matches);
});

// Handle user toggle via checkbox
checkbox.addEventListener('change', () => {
  const isDarkTheme = document.body.classList.contains('dark');
  console.log(`User toggled: ${isDarkTheme ? 'dark' : 'light'}`);
  applyDarkTheme(!isDarkTheme); // Toggle based on current state
});
