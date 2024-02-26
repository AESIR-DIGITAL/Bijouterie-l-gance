// Menu Hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    if(navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
});

// Filtres de catégorie
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.product-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Fonction pour ouvrir la Lightbox avec les détails du produit
function openModal(title, description, imageUrl) {
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    modalImg.src = imageUrl;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    modal.style.display = 'block';
}

// Fermer la Lightbox
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});
