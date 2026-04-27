import { createRecipe } from "../apis/recipes";

async function actionForm({ request, params }) {
  console.log("here");
  console.log(`Objet requête: ${request}`);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(`Titre de la recette: ${data.title}`);

  const recipe = await createRecipe(data);
  console.log(recipe);

  return { fromAction: true };
}

export default actionForm;
