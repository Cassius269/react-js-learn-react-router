import { useEffect, useState } from "react";

function Homepage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch("https://www.restapi.fr/api/recipes");

      if (response.ok) {
        const data = await response.json();
        setRecipes(Array.isArray(data) ? data : [data]);
        console.log(data);
      } else {
        console.log("Ooops une erreur");
      }
    };

    getRecipes();
  }, []);
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
