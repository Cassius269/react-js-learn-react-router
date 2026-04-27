import { redirect } from "react-router";
import { createRecipe } from "../apis/recipes";

async function profileFormAction({ request, params }) {
  console.log("here");
  console.log(`Objet requête: ${request}`);

  // Récupérer les données de formulaire
  const formData = await request.formData();

  // Transformer les données de formulaire en objet
  const data = Object.fromEntries(formData);
  console.log(`Titre de la recette: ${data.title}`);

  const response = await createRecipe(data);
  console.log(response);

  // Renvoyer une réponse
  if (response.ok) {
    // si recette créée, rediriger l'utilisateur à la page d'accueil
    return redirect("/");
  } else {
    // Sinon retourner la recette après sa création
    return { fromAction: true };
  }
}

export default profileFormAction;
