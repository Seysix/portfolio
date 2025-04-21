// Typewriter effect
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

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .project').forEach(el => observer.observe(el));

// Back to top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));