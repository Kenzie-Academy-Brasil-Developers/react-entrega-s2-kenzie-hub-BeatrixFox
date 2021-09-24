import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: #c53030;
    }
  }
`;
export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--font-details-color);
  color: var(--font-details-color);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      svg {
        color: #c53030;
      }
    `}

  input {
    background: transparent;
    align-items: center;
    border: 0;
    flex: 1;
    color: var(--black);
    &::placeholder {
      color: var(--font-details-color);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
