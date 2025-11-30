# 🎯 Guide de Démonstration - Fitness City Gotham

## 🚀 Comment tester le site

### Accès au site
Le site est accessible via : `http://localhost/Projet-Salle-1/index.html`

---

## 📋 Checklist des fonctionnalités à tester

### ✅ Page d'Accueil (index.html)

#### Navigation
- [ ] La navigation reste fixée en haut lors du scroll
- [ ] Le logo s'agrandit légèrement au survol
- [ ] Les liens de menu ont un effet de ligne dorée au survol
- [ ] Le lien actif est mis en évidence en or

#### Hero Section
- [ ] L'image principale a un effet parallax au scroll
- [ ] Le titre et le tagline sont bien visibles en or
- [ ] Le texte est centré et lisible

#### Sections
- [ ] Les éléments apparaissent progressivement au scroll
- [ ] Les cartes d'avantages s'élèvent au survol
- [ ] Les images d'installations s'agrandissent au survol
- [ ] Le bouton CTA change d'apparence au survol

#### Footer
- [ ] Les liens sociaux fonctionnent
- [ ] Le hover change la couleur en or

---

### 🖼️ Galerie (galerie.html)

#### Grille de photos
- [ ] Les photos sont disposées en grille responsive
- [ ] L'effet hover agrandit les images
- [ ] Un overlay doré apparaît au survol

#### Lightbox
- [ ] Cliquer sur une image ouvre la lightbox
- [ ] La lightbox affiche l'image en grand
- [ ] Le bouton X ferme la lightbox
- [ ] Cliquer à l'extérieur ferme la lightbox
- [ ] La touche Échap ferme la lightbox
- [ ] Le scroll de la page est bloqué quand la lightbox est ouverte

#### Compteur
- [ ] Le nombre de photos est affiché en bas de la galerie

---

### 📝 Inscription (inscription.html)

#### Formulaire
- [ ] Les champs ont un effet de focus avec bordure dorée
- [ ] Les placeholders sont visibles
- [ ] Le champ email valide le format
- [ ] Le champ téléphone accepte uniquement les chiffres

#### Validation du mot de passe
- [ ] Moins de 6 caractères = bordure rouge
- [ ] 6 caractères ou plus = bordure verte
- [ ] La confirmation doit correspondre au mot de passe
- [ ] Bordure rouge si les mots de passe ne correspondent pas

#### Sélection d'abonnement
- [ ] 3 options disponibles (Basic, Premium, VIP)
- [ ] Effet visuel lors de la sélection

#### Soumission
- [ ] Le bouton change d'apparence au survol
- [ ] Message "Inscription en cours..." apparaît
- [ ] Message de succès s'affiche
- [ ] Redirection automatique vers l'accueil après 2 secondes

---

### 📅 Planning (planning.html)

#### Tableau
- [ ] Le tableau est bien formaté et lisible
- [ ] Les lignes alternent en couleur
- [ ] Les lignes s'illuminent au survol

#### Jour actuel
- [ ] Le jour actuel est surligné en or
- [ ] Un badge "⭐ Aujourd'hui" est visible

#### Modal de détails
- [ ] Cliquer sur une ligne ouvre la modal
- [ ] La modal affiche toutes les informations du cours :
  - Nom du cours
  - Jour et horaire
  - Description
  - Coach
  - Niveau
  - Durée
  - Nombre de places
- [ ] Le bouton "Réserver ce cours" affiche une alerte
- [ ] Le X ferme la modal
- [ ] Cliquer à l'extérieur ferme la modal
- [ ] La touche Échap ferme la modal

---

## 📱 Tests Responsive

### Desktop (> 768px)
- [ ] Navigation horizontale
- [ ] Grille multi-colonnes pour les avantages
- [ ] Grille 3 colonnes pour les installations
- [ ] Grille galerie adaptative
- [ ] Footer en 2 colonnes

### Tablette (481px - 768px)
- [ ] Navigation qui s'adapte
- [ ] Grilles qui réduisent le nombre de colonnes
- [ ] Textes redimensionnés

### Mobile (< 480px)
- [ ] Navigation verticale
- [ ] Logo centré
- [ ] Grilles en 1 colonne
- [ ] Tableau scrollable horizontalement
- [ ] Boutons et textes adaptés

---

## 🎨 Tests de la Direction Artistique

### Couleurs
- [ ] Fond bleu marine (#050b33)
- [ ] Navigation bleu foncé (#151f60)
- [ ] Accents or (#ffd700)
- [ ] Texte blanc lisible

### Effets
- [ ] Dégradés de fond visibles
- [ ] Ombres dorées sur les éléments importants
- [ ] Transitions fluides (0.3s)
- [ ] Bordures dorées

### Typographie
- [ ] Police Playfair Display chargée
- [ ] Titres en or
- [ ] Texte lisible et espacé

---

## 🐛 Tests de Bug

### Navigation
- [ ] Aucun lien cassé entre les pages
- [ ] Le logo redirige vers l'accueil (si cliquable)

### JavaScript
- [ ] Pas d'erreurs dans la console du navigateur
- [ ] Toutes les animations fonctionnent
- [ ] Les événements se déclenchent correctement

### Images
- [ ] Toutes les images se chargent
- [ ] Les attributs alt sont présents
- [ ] Aucune image manquante

### Formulaire
- [ ] Les validations fonctionnent
- [ ] Aucune soumission sans validation complète
- [ ] Les messages d'erreur sont clairs

---

## 🌐 Tests Navigateurs

Tester sur :
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (si disponible)

---

## ⚡ Performance

### Vitesse de chargement
- [ ] La page se charge rapidement
- [ ] Les images ne ralentissent pas le site
- [ ] Les animations sont fluides (60fps)

### Optimisations
- [ ] Lazy loading sur la galerie
- [ ] Scripts en defer
- [ ] CSS optimisé

---

## 🎯 Scénarios Utilisateur

### Scénario 1 : Nouveau visiteur
1. Arriver sur l'accueil
2. Scroller pour voir les services
3. Cliquer sur "Galerie" dans le menu
4. Regarder les photos
5. Cliquer sur une photo pour l'agrandir
6. Fermer la lightbox
7. Aller sur "Inscription"
8. Remplir le formulaire
9. Soumettre

### Scénario 2 : Consulter les cours
1. Aller sur "Planning"
2. Voir le jour actuel surligné
3. Cliquer sur un cours
4. Lire les détails
5. Cliquer sur "Réserver"
6. Voir la confirmation

### Scénario 3 : Mobile
1. Ouvrir sur mobile (ou DevTools responsive)
2. Naviguer dans le menu mobile
3. Tester toutes les fonctionnalités
4. Vérifier la lisibilité

---

## 📊 Résultats Attendus

✅ **Site totalement fonctionnel**
✅ **Design respectant la DA (bleu/or)**
✅ **Toutes les interactions opérationnelles**
✅ **Responsive sur tous les appareils**
✅ **Code propre et sans erreurs**
✅ **Expérience utilisateur fluide**

---

## 🎉 Félicitations !

Si tous les tests passent, le site Fitness City Gotham est **100% fonctionnel** et prêt à l'utilisation !

---

**Développé avec 💪 et ⚡**
