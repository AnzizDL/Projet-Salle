// ========================================
// INSCRIPTION - Validation du formulaire
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    // === VALIDATION DU MOT DE PASSE ===
    function validatePassword() {
        if (password.value.length < 6) {
            password.setCustomValidity('Le mot de passe doit contenir au moins 6 caractères');
            return false;
        } else {
            password.setCustomValidity('');
            return true;
        }
    }
    
    password.addEventListener('input', validatePassword);
    
    // === VÉRIFICATION DE LA CONFIRMATION DU MOT DE PASSE ===
    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Les mots de passe ne correspondent pas');
            confirmPassword.style.borderColor = 'rgba(255, 0, 0, 0.6)';
            return false;
        } else {
            confirmPassword.setCustomValidity('');
            confirmPassword.style.borderColor = 'rgba(0, 255, 0, 0.6)';
            return true;
        }
    }
    
    confirmPassword.addEventListener('input', checkPasswordMatch);
    password.addEventListener('input', function() {
        if (confirmPassword.value) {
            checkPasswordMatch();
        }
    });
    
    // === VALIDATION DU TÉLÉPHONE ===
    phone.addEventListener('input', function() {
        // Supprime tous les caractères non numériques sauf + et -
        this.value = this.value.replace(/[^\d\+\-\s]/g, '');
    });
    
    // === ANIMATION DES CHAMPS ===
    const inputs = document.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        // Animation au focus
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Indicateur visuel de validation
        input.addEventListener('input', function() {
            if (this.validity.valid && this.value !== '') {
                this.style.borderColor = 'rgba(0, 255, 0, 0.6)';
            } else if (!this.validity.valid && this.value !== '') {
                this.style.borderColor = 'rgba(255, 0, 0, 0.6)';
            }
        });
    });
    
    // === SOUMISSION DU FORMULAIRE ===
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Vérification finale
        if (!validatePassword() || !checkPasswordMatch()) {
            alert('Veuillez corriger les erreurs dans le formulaire');
            return;
        }
        
        // Animation de succès
        const button = this.querySelector('button[type="submit"]');
        button.textContent = 'Inscription en cours...';
        button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        
        // Simulation d'envoi (remplacer par votre logique d'envoi réelle)
        setTimeout(function() {
            // Créer un message de succès
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                color: white;
                padding: 30px 50px;
                border-radius: 15px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                z-index: 10000;
                text-align: center;
                font-size: 1.3em;
            `;
            successMsg.innerHTML = `
                <h2 style="margin-bottom: 15px;">✓ Inscription réussie !</h2>
                <p>Bienvenue à Fitness City Gotham</p>
            `;
            
            document.body.appendChild(successMsg);
            
            // Redirection après 2 secondes
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
            
        }, 1500);
    });
    
    // === EFFET DE PRIX DYNAMIQUE ===
    const membershipSelect = document.getElementById('membership');
    
    if (membershipSelect) {
        membershipSelect.addEventListener('change', function() {
            this.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)';
            
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 500);
        });
    }
});
