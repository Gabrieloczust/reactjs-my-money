import { createServer, Model } from "miragejs";
import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://react-my-money.vercel.app/api";

export const api = axios.create({
  baseURL,
});

export const server = createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Landing Page",
          value: 4000,
          type: "deposit",
          category: "Trabalho",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Internet",
          value: 139,
          type: "withdraw",
          category: "Custo Fixo",
          createdAt: new Date(),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("/transactions", (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const data = {
        ...body,
        createdAt: new Date(),
      };

      return schema.create("transactions", data);
    });
  },
});
