import styles from "../../assets/styles/layouts/Header.module.scss";
function Header() {
  return (
    <header className="container-fluid border border-2 p-2 d-flex justify-content-between">
      <nav className="d-flex justify-content-around w-100">
        <img
          src="https://cdn-icons.flaticon.com/svg/7434/7434561.svg?token=exp=1777122008~hmac=aa0d334b625f8c56eb446e8911fce110"
          alt="logo"
          width={30}
        />
        <ul>
          <li>Lien1</li>
          <li>Lien2</li>
          <li>Lien3</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
