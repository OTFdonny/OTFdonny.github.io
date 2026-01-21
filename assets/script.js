document.addEventListener('DOMContentLoaded', function() {
    // Optimized Counter for stats
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const originalText = el.innerText;
                    const targetNum = parseInt(originalText.replace(/\D/g, ''));
                    let current = 0;
                    const step = targetNum / 50;

                    const interval = setInterval(() => {
                        current += step;
                        if (current >= targetNum) {
                            el.innerText = originalText;
                            clearInterval(interval);
                        } else {
                            const prefix = originalText.includes('#') ? '#' : '';
                            const suffix = originalText.includes('+') ? '+' : '';
                            el.innerText = prefix + Math.floor(current) + suffix;
                        }
                    }, 30);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        stats.forEach(s => observer.observe(s));
    };

    animateStats();
});
