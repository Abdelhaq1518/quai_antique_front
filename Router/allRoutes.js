import Route from "./route.js";

// Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/Pages/home.html"),
  new Route("/galerie", "Galerie", "/Pages/galerie.html"),
  new Route("/carte", "La carte", "/Pages/carte.html"),
  new Route("/reservations", "Les réservations", "/Pages/reservations.html"),
  new Route("/compte", "Mon compte", "/Pages/compte.html"),
  new Route("/connexion", "Connexion", "/Pages/connexion.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
