import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--container);
  margin: 0 auto;

  padding: 2.5rem 1rem;

  @media (max-width: 720px) {
    padding: 2rem 1rem;
  }
`;
