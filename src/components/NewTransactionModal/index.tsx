import { ChangeEvent, FormEvent, useState } from "react";
import ReactModal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Form, Close, TransactionTypeContainer, RadioBox } from "./styles";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

ReactModal.setAppElement("#root");

export function NewTransactionModal(props: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  function handleSetTypeDeposit() {
    setType("deposit");
  }

  function handleSetTypeWithdraw() {
    setType("withdraw");
  }

  function isTypeDeposit() {
    return type === "deposit";
  }

  function isTypeWithdraw() {
    return type === "withdraw";
  }

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Close
        type="button"
        onClick={props.onRequestClose}
        title="Fechar Modal"
        aria-label="Fechar Modal de Nova Transação"
      >
        <img src={closeImg} alt="Ícone de Fechar" />
      </Close>

      <Form onSubmit={handleCreateNewTransaction}>
        <span className="title">Cadastrar Transação</span>

        <input
          type="text"
          placeholder="Título"
          autoFocus
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          min="0"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            title="Selecionar Entrada"
            aria-label="Selecionar Entrada como o tipo de Transação"
            onClick={handleSetTypeDeposit}
            isActive={isTypeDeposit()}
            activeColor="#33cc95"
          >
            <img src={incomeImg} alt="Ícone de Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            title="Selecionar Saída"
            aria-label="Selecionar Saída como o tipo de Transação"
            onClick={handleSetTypeWithdraw}
            isActive={isTypeWithdraw()}
            activeColor="#e52e4d"
          >
            <img src={outcomeImg} alt="Ícone de Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button
          type="submit"
          aria-label="Cadastrar Nova Transação"
          title="Cadastrar Transação"
        >
          Cadastar
        </button>
      </Form>
    </ReactModal>
  );
}
