export async function getRecipes() {
  const recipes = await (
    await fetch("https://www.restapi.fr/api/recipes?delay=3")
  ).json();

  return recipes;
}

export async function createRecipe(recipe) {
  const response = await fetch("https://www.restapi.fr/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if (response.ok) {
    return response.json();
  }
}
