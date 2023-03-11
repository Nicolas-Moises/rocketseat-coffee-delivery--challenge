import styled, { css } from "styled-components";

interface ItemsAmountInputProps {
  size?: 'md' | 'sm'
}

export const ItemsAmountInputContainer = styled.div<ItemsAmountInputProps>`
    display: flex;
    background: ${props => props.theme.colors["base-button"]};
    align-items: center;
    flex: 1;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;

    input {
        width: 100%;
        text-align: center;
        background: none;
        border: none;
        color: ${props => props.theme.colors["base-title"]};
        &:focus {
        outline: none;
        }
    }
    
    ${({ size }) =>
    size === "md" &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === "sm" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const ButtonIconContainer = styled.button.attrs({
  type: "button",
})`
    width: 0.875rem;
    height: 0.875rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors["brand-purple"]};
    transition: 0.4s;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    }
  `;