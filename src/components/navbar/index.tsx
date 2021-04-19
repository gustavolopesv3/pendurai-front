import style from "./navbar.module.scss";
import {
  RiGridFill,
  RiStoreLine,
  RiSearchLine,
  RiArchiveLine,
} from "react-icons/ri";
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
            <RiGridFill /> <a href="/">DashBoard</a>
          </li>
          <li>
            <RiStoreLine /> <a href="/">Venda</a>
          </li>
          <li>
            <RiSearchLine /> <a href="/">Clientes</a>
          </li>
          <li>
            <RiArchiveLine /> <a href="/">Produtos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
