document.addEventListener('DOMContentLoaded', () => {
  // Event delegation to handle clicks on both "Read More" and "Read Less" buttons
  document.addEventListener('click', (event) => {
    if (event.target.matches('.read-more-btn, .read-less-btn')) {
      const card = event.target.closest('.blog-card');
      card.classList.toggle('flipped');  // Toggles the 'flipped' class on the card
    }
  });
});
