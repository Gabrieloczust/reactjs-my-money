import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: var(--container);
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: var(--border-radius);
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 720px) {
    padding: 2rem 1rem;
    flex-direction: column;

    button {
      margin-top: 2rem;
    }
  }
`;
