import Route from "./route.js";

// Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/Pages/home.html"),
  new Route("/galerie", "Galerie", "/Pages/galerie.html"),
  new Route("/carte", "La carte", "/Pages/carte.html"),
  new Route("/reservations", "Les réservations", "/Pages/reservations.html"),
  new Route("/compte", "Mon compte", "/Pages/auth/compte.html"),
  new Route("/connexion", "Connexion", "/Pages/auth/connexion.html"),
  new Route("/inscription", "inscription", "/Pages/auth/inscription.html"),
  new Route("/mdp", "modifier votre mot de passe", "/Pages/auth/mdp.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
