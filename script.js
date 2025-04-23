const texts = ["Welcome to my portfolio.", "I build things for the web.", "Explore my projects."];
let count = 0, idx = 0, current = '', letter = '';
function type() {
  if (count === texts.length) count = 0;
  current = texts[count];
  letter = current.slice(0, ++idx);
  document.getElementById('typed').textContent = letter;
  if (letter.length === current.length) {
    setTimeout(() => {
      idx = 0; count++;
      document.getElementById('typed').textContent = '';
      type();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}
document.addEventListener('DOMContentLoaded', type);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .project').forEach(el => observer.observe(el));

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const emailLink = document.getElementById('email-link');
emailLink.addEventListener('click', function(e) {
  e.preventDefault();  
  const email = this.textContent.trim();
  navigator.clipboard.writeText(email)
});

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === 'active') enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})