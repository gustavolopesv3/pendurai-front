import style from "./dashboard.module.scss";

export function Dashboard() {
  return (
    <section>
      <div className={style.cardReceber}>
        <h1>R$1.500,00</h1>
        <span>A receber</span>
      </div>
      <div className={style.cardRecebido}>
        <h1>R$250,00</h1>
        <span>Recebido mês</span>
      </div>
      <div className={style.cardRegistro}>
        <h1>25</h1>
        <span>Registros do mês</span>
      </div>
    </section>
  );
}
