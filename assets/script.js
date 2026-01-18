// Luxury Blood Esports - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Create animated gold particles
    function createParticles() {
        const particles = document.getElementById('particles');
        if (!particles) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 3 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = '#FFD700';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.boxShadow = '0 0 10px #FFD700';
            
            // Animation
            particle.animate([
                { transform: 'translateY(0px)', opacity: 0 },
                { transform: 'translateY(-20px)', opacity: 1 },
                { transform: 'translateY(-1000px)', opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                delay: Math.random() * 5000,
                iterations: Infinity
            });
            
            particles.appendChild(particle);
        }
    }
    
    // Team roster interactivity
    function setupTeamCards() {
        const playerCards = document.querySelectorAll('.player-card');
        playerCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.05)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Clan badges glow effect
    function setupClanBadges() {
        const badges = document.querySelectorAll('.clan-badge');
        badges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px #FFD700';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });
    }
    
    // Active navigation highlighting
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage.includes(linkHref.replace('.html', '')))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Count-up animation for stats
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const finalValue = parseInt(element.textContent);
                    let currentValue = 0;
                    
                    const increment = finalValue / 50;
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= finalValue) {
                            element.textContent = finalValue + (element.textContent.includes('+') ? '+' : '');
                            clearInterval(timer);
                        } else {
                            element.textContent = Math.floor(currentValue);
                        }
                    }, 30);
                    
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }
    
    // Initialize everything
    createParticles();
    setupTeamCards();
    setupClanBadges();
    highlightActiveNav();
    animateStats();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
