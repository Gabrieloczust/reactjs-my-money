import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransitionModal: () => void;
};

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button
          type="button"
          onClick={props.onOpenNewTransitionModal}
          title="Nova Transação"
          aria-label="Abrir modal para Nova Transação"
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
