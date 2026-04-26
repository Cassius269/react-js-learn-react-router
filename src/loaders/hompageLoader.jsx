import { getRecipes } from "../apis/recipes";

export async function homepageLoader({ params, request }) {
  const recipes = await getRecipes();

  console.log(request);
  // Récupérer l'URL et l'id
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  console.log(id);

  return {
    recipes,
  };
}
