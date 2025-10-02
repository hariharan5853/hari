// ===== Sidebar toggle for mobile =====
const sidebar = document.querySelector('.sidebar');
const sidebarToggleBtn = document.getElementById('sidebarToggle');

sidebarToggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// ===== Theme Palette =====
const toggleBtn= document.getElementById('togglePalette');
const palette = document.getElementById('palette');
toggleBtn.addEventListener('click', () => palette.classList.toggle('active'));
document.querySelectorAll('.color-swatch').forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--accent', btn.dataset.color);
  });
});

// ===== Active Nav Highlight =====
const navList = document.getElementById('navList');
const navLinks = navList.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.querySelectorAll('li').forEach(x => x.classList.remove('active'));
    link.parentElement.classList.add('active');
    // Close sidebar on mobile after click
    if (window.innerWidth <= 768) sidebar.classList.remove('active');
  });
});

// ===== Social icon hover =====
const icons = document.querySelectorAll(".homeicon a");
const hoverColors = ["#0A66C2", "#333", "#ec4564ff", "#FF0000"];
icons.forEach((icon, index) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = hoverColors[index];
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#fff";
    icon.style.transform = "scale(1)";
  });
});

// ===== Contact Form Validation =====
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("⚠️ Please fill in your Name, Email, and Message.");
    return false;
  }  

  if (!emailRegex.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return false;
  }

  // ✅ Success
  alert("✅ Successfully Submitted!");
  
  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  return false; // prevent actual form submission
}









