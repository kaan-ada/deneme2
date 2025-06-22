// Mobil menü aç/kapat
document.getElementById('mobile-menu-btn').onclick = function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};

// Mouse trail effect
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorTrail.style.left = mouseX + 'px';
    cursorTrail.style.top = mouseY + 'px';
});
// Create additional trail elements
const trailCount = 10;
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.width = (20 - i) + 'px';
    trail.style.height = (20 - i) + 'px';
    trail.style.opacity = 1 - (i * 0.1);
    document.body.appendChild(trail);
    (function(index) {
        let posX = mouseX, posY = mouseY;
        let delay = index * 20;
        function updatePosition() {
            const diffX = mouseX - posX;
            const diffY = mouseY - posY;
            posX += diffX * 0.2;
            posY += diffY * 0.2;
            trail.style.left = posX + 'px';
            trail.style.top = posY + 'px';
            setTimeout(updatePosition, delay);
        }
        updatePosition();
    })(i);
}

// Navbar scroll shadow ve arka plan efekti
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if(window.scrollY > 10) {
        nav.classList.add('bg-white', 'shadow-lg', 'backdrop-blur', 'bg-opacity-90');
    } else {
        nav.classList.remove('shadow-lg', 'backdrop-blur', 'bg-opacity-90');
    }
});

// Tüm animasyonlar ve hash scroll engelleme tek yerde
document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animasyonu (sadece opacity ile veya daha küçük bir translate ile)
    document.querySelectorAll('section, header').forEach(function(el, i) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(10px)'; // 40px yerine 10px yapıldı
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(.4,0,.2,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200 + i * 150);
    });

    // Skill bar animasyonu
    document.querySelectorAll('.skill-progress').forEach(function(bar) {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
            bar.style.width = width;
        }, 500);
    });

    // Sayfa yüklendiğinde hash varsa scroll'u en üste al
    if (window.location.hash) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);
    }
});

// Proje kartlarına hover animasyonu
document.querySelectorAll('.portfolio-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.style.boxShadow = '0 20px 40px 0 rgba(59,130,246,0.10)';
        card.style.transform = 'translateY(-8px) scale(1.03)';
    });
    card.addEventListener('mouseleave', function() {
        card.style.boxShadow = '';
        card.style.transform = '';
    });
});

// Typewriter effect for multiple elements
const elements = document.querySelectorAll('.typewriter');
elements.forEach((el, index) => {
    el.style.animationDelay = (index * 0.5) + 's';
});

// Typewriter animasyonu bitince yazı kalsın
document.addEventListener('DOMContentLoaded', function() {
    const tw = document.querySelector('.typewriter');
    if (tw) {
        tw.addEventListener('animationend', function(e) {
            if (e.animationName === 'typing') {
                tw.style.borderRight = 'none';
                tw.style.maxWidth = '30ch';
            }
        });
    }
});