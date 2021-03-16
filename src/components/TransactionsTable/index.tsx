import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Landing Page</td>
            <td className="deposit">R$ 1.000</td>
            <td>Desenvolvimento</td>
            <td>15/02/2021</td>
          </tr>
          <tr>
            <td>Landing Page</td>
            <td className="withdraw">- R$ 500</td>
            <td>Desenvolvimento</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}