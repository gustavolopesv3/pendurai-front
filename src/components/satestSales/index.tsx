import style from "./sales.module.scss";

export function LatestSales() {
  return (
    <div className={style.latestSales}>
      <h1>Ultimas Vendas</h1>
      <ul>
        <li>
          <div className={style.sale}>
            <h3>Charlie Brow JR</h3>
            <span>arroz, feijão</span>
          </div>
          <strong>15,00</strong>
        </li>

        <li>
          <div className={style.sale}>
            <h3>Charlie Brow JR</h3>
            <span>arroz, feijão</span>
          </div>
          <strong>15,00</strong>
        </li>

        <li>
          <div className={style.sale}>
            <h3>Charlie Brow JR</h3>
            <span>arroz, feijão</span>
          </div>
          <strong>15,00</strong>
        </li>

        <li>
          <div className={style.sale}>
            <h3>Charlie Brow JR</h3>
            <span>arroz, feijão</span>
          </div>
          <strong>15,00</strong>
        </li>
      </ul>
    </div>
  );
}
