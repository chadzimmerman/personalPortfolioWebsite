document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update clock immediately and every second
  updateClock();
  setInterval(updateClock, 1000);