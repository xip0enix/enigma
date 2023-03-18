const checkbox = document.getElementById('checkbox');
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeMq.matches) {
    document.body.classList.toggle('dark');
    console.log("Autotheme: dark");
  } else {
    console.log("Autotheme: white")
  }

checkbox.addEventListener('change', () => {
    // ändere den Hintergrund
    document.body.classList.toggle('dark');
});

