import { Suspense, use } from "react";
import { useLoaderData, useOutletContext } from "react-router";

function ListRecipes({ recipesPromise }) {
  // Récupérer la promesse
  const recipes = use(recipesPromise);

  return (
    <>
      {recipes.length > 0 && (
        <ul>
          {recipes.map((r, index) => (
            <li
              key={r._id}
              className={`${index % 2 === 0 ? "text-secondary" : ""}`}
            >
              {r.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Homepage() {
  // Recupérer l'utilisateur le contexte de l'outlet
  const { user } = useOutletContext();

  // Récupérer la promesse des recettes depuis le chargeur de données de la route homepage
  const { recipes: recipePromise } = useLoaderData();

  console.log("User depuis le home", user);
  return (
    <>
      <h1>Je suis la page d'accueil</h1>
      <Suspense
        fallback={
          <p className="text-center text-warning">Chargement en cours</p>
        }
      >
        <ListRecipes recipesPromise={recipePromise} />
      </Suspense>
    </>
  );
}

export default Homepage;
