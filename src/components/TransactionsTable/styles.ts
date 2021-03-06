import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  overflow-x: auto;

  @media (max-width: 720px) {
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      color: var(--text-body);
      background: var(--shape);
      border: 0;

      &:first-child {
        color: var(--text-title);
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
