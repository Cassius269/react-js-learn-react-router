export async function getRecipes() {
  const recipes = await (
    await fetch("https://www.restapi.fr/api/recipes?delay=3")
  ).json();

  return recipes;
}
