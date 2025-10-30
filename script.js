// Toggle description below each pose
function toggleDescription(card) {
  const desc = card.querySelector('.pose-desc');
  desc.classList.toggle('show');
}

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const poses = document.querySelectorAll('.pose-card');

  poses.forEach(pose => {
    const title = pose.querySelector('h3').innerText.toLowerCase();
    if (title.includes(filter)) {
      pose.style.display = '';
    } else {
      pose.style.display = 'none';
    }
  });
});
