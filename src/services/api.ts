import { createServer, Model } from "miragejs";
import axios from "axios";

export const baseURL = "http://localhost:3000/api";

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
          title: "Site",
          value: 1000,
          type: "deposit",
          category: "Trabalho",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Internet",
          value: 130,
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
