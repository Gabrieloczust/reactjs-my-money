import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Close = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  display: flex;

  border: 0;
  background: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .title {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 720px) {
      font-size: 1.2rem;
    }
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: var(--border-radius);

    border: 1px solid var(--input-border-color);
    background-color: var(--input-color);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    @media (max-width: 720px) {
      height: 3rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: var(--border-radius);
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 720px) {
      height: 3rem;
      font-size: 0.8rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

type RadioBoxProps = {
  isActive: boolean;
  activeColor: string;
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);

  background: ${(props) =>
    props.isActive ? transparentize(0.85, props.activeColor) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
  }

  span {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  @media (max-width: 720px) {
    height: 3rem;
  }
`;
