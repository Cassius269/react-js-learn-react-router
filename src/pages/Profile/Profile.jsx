import { NavLink, Outlet } from "react-router";
// import "../../assets/styles/layouts/Profile.module.scss";

function Profile() {
  // throw new Error("Ooops, une erreur");

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
