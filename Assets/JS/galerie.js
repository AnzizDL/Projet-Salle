// ========================================
// GALERIE - JavaScript pour Lightbox
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === LIGHTBOX POUR LA GALERIE ===
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Créer l'élément lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;
    
    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(255, 215, 0, 0.5);
    `;
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 30px;
        right: 50px;
        font-size: 50px;
        color: #ffd700;
        cursor: pointer;
        transition: transform 0.3s ease;
    `;
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Ouvrir la lightbox au clic sur une image
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fermer la lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    lightbox.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // Effet hover sur le bouton de fermeture
    closeBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // === COMPTEUR D'IMAGES ===
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        const imageCount = galleryItems.length;
        const counter = document.createElement('p');
        counter.style.cssText = `
            text-align: center;
            color: #ffd700;
            font-size: 1.2em;
            margin-top: 30px;
            font-style: italic;
        `;
        counter.textContent = `${imageCount} photos disponibles`;
        gallerySection.appendChild(counter);
    }
});
