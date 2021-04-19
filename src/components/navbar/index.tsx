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
            <RiStoreLine /> <a href="/">Venda</a>
          </li>
          <li>
            <Link to="/clientes">
              <RiSearchLine /> Clientes
            </Link>
          </li>
          <li>
            <RiArchiveLine /> <a href="/">Produtos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
