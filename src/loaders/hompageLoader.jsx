export async function homepageLoader() {
  const response = await fetch("https://www.restapi.fr/api/recipes");

  if (response.ok) {
    return {
      recipes: await response.json(),
    };
  }
}
