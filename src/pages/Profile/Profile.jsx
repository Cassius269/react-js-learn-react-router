import { useEffect } from "react";
import { NavLink, Outlet, useParams, useSearchParams } from "react-router";
// import "../../assets/styles/layouts/Profile.module.scss";

function Profile() {
  // throw new Error("Ooops, une erreur");

  // Récupérer les paramètres dynamqiques d'URL
  const params = useParams();
  const { id, name } = params; // destructuration de l'objet params
  console.log(id, name);

  // Récupérer les paramètres optionnels de recherche d'URL
  const [queryParams, setQueryParams] = useSearchParams();
  useEffect(() => {
    console.log("Les paramètres de recherche", Object.fromEntries(queryParams)); // afficher tous les paramètres optionnesl
    console.log(queryParams.get("name"));
    console.log(queryParams.get("token"));
  }, [queryParams]);

  return (
    <>
      <nav>
        <ul className="d-flex gap-3">
          <NavLink end to="">
            Vue globale
          </NavLink>
          <NavLink to="/profile/data">Data</NavLink>
        </ul>
      </nav>

      {/** Afficher le contenu en fonction de l'URL */}
      <Outlet />
    </>
  );
}

export default Profile;
