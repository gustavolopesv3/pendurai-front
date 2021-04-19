import style from "./navbar.module.scss";
import {
  RiGridFill,
  RiStoreLine,
  RiSearchLine,
  RiArchiveLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <h1>
            PendurAi <strong>!</strong>{" "}
          </h1>
        </div>
        <ul>
          <li>
            <Link to="/">
              <RiGridFill /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/vendas">
              <RiStoreLine />
              Vendas
            </Link>
          </li>
          <li>
            <Link to="/clientes">
              <RiSearchLine /> Clientes
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <RiArchiveLine /> Produtos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
