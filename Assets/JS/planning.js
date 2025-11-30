// ========================================
// PLANNING - Interactivité du tableau
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const tableRows = document.querySelectorAll('tbody tr');
    const table = document.querySelector('table');
    
    // === MISE EN ÉVIDENCE DE LA LIGNE AU SURVOL ===
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // === MODAL DE DÉTAILS DU COURS ===
    const coursDetails = {
        'Boxe': {
            description: 'Cours de boxe intense pour développer force et endurance',
            coach: 'Mike Johnson',
            niveau: 'Tous niveaux',
            duree: '60 minutes',
            places: '15 personnes max'
        },
        'Cardio Training': {
            description: 'Entraînement cardiovasculaire pour brûler les calories',
            coach: 'Sarah Martinez',
            niveau: 'Débutant à Intermédiaire',
            duree: '60 minutes',
            places: '20 personnes max'
        },
        'Musculation': {
            description: 'Programme de musculation avec équipements professionnels',
            coach: 'John Smith',
            niveau: 'Tous niveaux',
            duree: '60 minutes',
            places: '12 personnes max'
        },
        'CrossFit': {
            description: 'Entraînement fonctionnel haute intensité',
            coach: 'Emma Williams',
            niveau: 'Intermédiaire à Avancé',
            duree: '60 minutes',
            places: '15 personnes max'
        },
        'Natation': {
            description: 'Cours de natation dans notre piscine olympique',
            coach: 'David Brown',
            niveau: 'Tous niveaux',
            duree: '60 minutes',
            places: '10 personnes max'
        },
        'Aquagym': {
            description: 'Gymnastique aquatique pour tonifier le corps',
            coach: 'Lisa Anderson',
            niveau: 'Débutant',
            duree: '60 minutes',
            places: '20 personnes max'
        },
        'Cardio': {
            description: 'Session cardio dynamique pour bien commencer la semaine',
            coach: 'Chris Taylor',
            niveau: 'Tous niveaux',
            duree: '60 minutes',
            places: '25 personnes max'
        }
    };
    
    // Créer la modal
    const modal = document.createElement('div');
    modal.id = 'course-modal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        justify-content: center;
        align-items: center;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, rgba(21, 31, 96, 0.98) 0%, rgba(5, 11, 51, 0.98) 100%);
        padding: 40px;
        border-radius: 20px;
        max-width: 600px;
        width: 90%;
        border: 3px solid #ffd700;
        box-shadow: 0 15px 50px rgba(255, 215, 0, 0.5);
        position: relative;
    `;
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 25px;
        font-size: 40px;
        color: #ffd700;
        cursor: pointer;
        transition: transform 0.3s ease;
    `;
    
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Afficher les détails au clic sur une ligne
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const courseName = this.cells[2].textContent;
            const day = this.cells[0].textContent;
            const time = this.cells[1].textContent;
            const details = coursDetails[courseName];
            
            if (details) {
                modalContent.innerHTML = `
                    <span style="position: absolute; top: 15px; right: 25px; font-size: 40px; color: #ffd700; cursor: pointer;">&times;</span>
                    <h2 style="color: #ffd700; font-size: 2.5em; margin-bottom: 20px; text-align: center;">${courseName}</h2>
                    <div style="color: white; font-size: 1.1em; line-height: 1.8;">
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">📅 Jour :</strong> ${day}</p>
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">🕐 Horaire :</strong> ${time}</p>
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">📝 Description :</strong> ${details.description}</p>
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">👨‍🏫 Coach :</strong> ${details.coach}</p>
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">📊 Niveau :</strong> ${details.niveau}</p>
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">⏱️ Durée :</strong> ${details.duree}</p>
                        <p style="margin: 15px 0;"><strong style="color: #ffd700;">👥 Places :</strong> ${details.places}</p>
                        <button style="
                            display: block;
                            margin: 30px auto 0;
                            padding: 15px 40px;
                            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
                            color: #050b33;
                            border: none;
                            border-radius: 50px;
                            font-size: 1.2em;
                            font-weight: bold;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            Réserver ce cours
                        </button>
                    </div>
                `;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                
                // Ajouter l'événement de fermeture
                const newCloseBtn = modalContent.querySelector('span');
                newCloseBtn.addEventListener('click', closeModal);
                
                const reserveBtn = modalContent.querySelector('button');
                reserveBtn.addEventListener('click', function() {
                    alert(`Réservation confirmée pour le cours de ${courseName} le ${day} à ${time} !`);
                    closeModal();
                });
            }
        });
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fermer avec Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // === JOUR ACTUEL EN SURBRILLANCE ===
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const today = days[new Date().getDay()];
    
    tableRows.forEach(row => {
        if (row.cells[0].textContent === today) {
            row.style.background = 'linear-gradient(90deg, rgba(255, 215, 0, 0.3) 0%, rgba(21, 31, 96, 0.8) 50%, rgba(255, 215, 0, 0.3) 100%)';
            row.style.border = '2px solid #ffd700';
            
            // Ajouter un badge "Aujourd'hui"
            const badge = document.createElement('span');
            badge.textContent = ' ⭐ Aujourd\'hui';
            badge.style.cssText = `
                color: #ffd700;
                font-weight: bold;
                font-size: 0.9em;
            `;
            row.cells[0].appendChild(badge);
        }
    });
});
