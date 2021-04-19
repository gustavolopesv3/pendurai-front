import { useEffect, useState } from "react";
import { api } from "../../services/api";
import style from "./sales.module.scss";

interface SalesData {
  id: number;
  client: {
    name: string;
  };
  products: [
    {
      name: string;
      price: number;
    }
  ];
}

export function LatestSales() {
  const [sales, setSales] = useState<SalesData[]>([]);

  useEffect(() => {
    getSales();
  }, []);
  const getSales = async () => {
    const response = await api.get("/sale");
    setSales(response.data);
    console.log(response.data);
  };

  return (
    <div className={style.latestSales}>
      <h1>Ultimas Vendas</h1>
      <ul>
        {sales.map((sale) => {
          return (
            <li key={sale.id}>
              <div className={style.sale}>
                <h3>{sale.client.name}</h3>
                <div>
                  {sale.products.map((product) => {
                    return <span>{product.name}</span>;
                  })}
                </div>
              </div>
              <strong>150,23</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
