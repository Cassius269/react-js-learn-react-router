export async function homepageLoader() {
  const response = await fetch("https://www.restapi.fr/api/recipes?delay=3");

  //   throw new Error("Oops, une erreur");

  if (response.ok) {
    return {
      recipes: await response.json(),
    };
  }
}
