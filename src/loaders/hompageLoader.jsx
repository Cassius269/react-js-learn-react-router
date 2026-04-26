export async function homepageLoader({ params, request }) {
  console.log(request);
  // Récupérer l'URL et l'id
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  console.log(id);

  const response = await fetch("https://www.restapi.fr/api/recipes?delay=3");

  //   throw new Error("Oops, une erreur");

  if (response.ok) {
    return {
      recipes: await response.json(),
    };
  }
}
