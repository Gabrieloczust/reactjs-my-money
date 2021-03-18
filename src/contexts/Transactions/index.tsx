import { createContext, useContext, useEffect, useState } from "react";
import {
  TransactionContextProps,
  TransactionInputProps,
  TransactionProps,
  TransactionsProviderProps,
} from "./types";
import { api } from "../../services/api";

export const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);

  function totalType(type: string) {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => (total += transaction.value), 0);
  }

  async function createTransaction(transaction: TransactionInputProps) {
    const { data } = await api.post("/transactions", transaction);

    setTransactions(() => [...transactions, data.transactions]);
  }

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  useEffect(() => {
    setIncomes(totalType("deposit"));
    setOutcomes(totalType("withdraw"));
  }, [transactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, incomes, outcomes, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
