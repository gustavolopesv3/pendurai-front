import { useEffect, useState } from "react";
import { NavBar } from "./components/navbar";
import { api } from "./services/api";

interface ClientsData {
  name: string;
  cpf: string;
}

function App() {
  const [clientes, setClientes] = useState<ClientsData[]>([]);

  useEffect(() => {
    getClients();
  }, []);
  const getClients = async () => {
    const response = await api.get("/cliente");
    setClientes(response.data);
    console.log(response.data);
  };
  return (
    <>
      <div className="container">
        <NavBar />

        <ul>
          {clientes.map((cliente) => {
            return (
              <li key={cliente.cpf}>
                {cliente.name} - {cliente.cpf}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
