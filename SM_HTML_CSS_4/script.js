const cards = document.querySelectorAll('.card1');


cards.forEach((card1) => {
    card1.addEventListener('mousemove', (e) => {
        const rect = card1.getBoundingClientRect();
    
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = (y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
    
        card1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card1.addEventListener('mouseleave', () => {
        card1.style.transform = `rotateX(0) rotateY(0)`;
    })

    card1.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card1.classList.add('active');
    })

})
