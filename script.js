document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search Teams...';
    searchInput.style.margin = '1rem';
    searchInput.style.padding = '0.5rem';
    searchInput.style.width = '80%';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.borderRadius = '5px';
    searchInput.style.fontSize = '1rem';

    const teamsSection = document.querySelector('.teams-section');
    teamsSection.prepend(searchInput);

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const teamCards = document.querySelectorAll('.team-card');

        teamCards.forEach(card => {
            const teamName = card.querySelector('h3').innerText.toLowerCase();
            if (teamName.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Placeholder for fetching live scores from an API
async function fetchLiveScores() {
    const scoreBoard = document.createElement('div');
    scoreBoard.id = 'live-scores';
    scoreBoard.style.padding = '1rem';
    scoreBoard.style.backgroundColor = '#fff';
    scoreBoard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    scoreBoard.style.margin = '1rem auto';
    scoreBoard.style.width = '90%';
    scoreBoard.style.borderRadius = '10px';
    scoreBoard.style.textAlign = 'center';

    scoreBoard.innerHTML = `<h2>Live Scores</h2><p>Fetching scores...</p>`;
    document.body.prepend(scoreBoard);

    try {
        const response = await fetch('https://example.com/api/live-scores'); // Replace with real API
        const data = await response.json();

        // Assuming data contains scores
        scoreBoard.innerHTML = `<h2>Live Scores</h2><p>${data.match}</p>`;
    } catch (error) {
        scoreBoard.innerHTML = `<h2>Live Scores</h2><p>Unable to fetch scores.</p>`;
    }
}
fetchLiveScores();


//moving backgorund images
const heroSection = document.querySelector('.hero');
const images = [
  'images/aiimage.webp',
  'images/cskhomepage.jpeg',
  'images/freepik__candid-image-photography-natural-textures-highly-r__85540.jpeg',
];

let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 3000); // Change the background every 3 seconds

// JavaScript to trigger the floating and pop-out effects when the user scrolls
window.addEventListener('scroll', function() {
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Apply the pop-out effect if the card is within the viewport
        if (cardPosition <= windowHeight * 0.8) {
            card.classList.add('popOut');  // Add class to trigger animation
        } else {
            card.classList.remove('popOut');  // Remove class to reset animation
        }
    });
});
