import { createServer } from "miragejs";
import axios from "axios";

export const baseURL = "http://localhost:3000/api";

export const api = axios.create({
  baseURL,
});

export const server = createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: new Date(),
        },
      ];
    });
  },
});
