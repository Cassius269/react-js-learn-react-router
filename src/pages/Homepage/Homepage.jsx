import { useLoaderData, useOutletContext } from "react-router";

function Homepage() {
  // Recupérer l'utilisateur le contexte de l'outlet
  const { user } = useOutletContext();

  // Récupérer les recettes depuis le chargeur de données de la route homepage
  const { recipes } = useLoaderData();

  console.log("User depuis le home", user);
  return (
    <>
      <h1>Je suis la page d'accueil</h1>
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

export default Homepage;
