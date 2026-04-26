import { useLoaderData } from "react-router";

function Homepage() {
  const { recipes } = useLoaderData();

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
