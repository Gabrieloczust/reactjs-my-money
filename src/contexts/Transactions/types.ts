import { ReactNode } from "react";

export type TransactionProps = {
  id: number;
  title: string;
  value: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
};

export type TransactionContextProps = {
  transactions: TransactionProps[];
  incomes: number;
  outcomes: number;
  createTransaction: (transaction: TransactionInputProps) => Promise<void>;
};

export type TransactionsProviderProps = {
  children: ReactNode;
};

export type TransactionInputProps = Omit<TransactionProps, "id" | "createdAt">;
