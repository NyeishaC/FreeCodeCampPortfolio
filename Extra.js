// Target the about section figure card
const card = document.querySelector('.about_figure');

if (card) {
  // Add 3D mouse tracking movement
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation angles based on cursor offset
    const rotateX = (-y / 8).toFixed(2);
    const rotateY = (x / 8).toFixed(2);

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  // Reset positioning smoothly when mouse leaves the card
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
}