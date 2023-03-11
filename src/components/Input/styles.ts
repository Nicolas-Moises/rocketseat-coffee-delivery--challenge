import styled from "styled-components";

export const FieldInputLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        color: ${props => props.theme.colors["base-error"]};
    }
`

export const InputStyleContainer = styled.input`
    height: 3rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors["base-button"]};
    background: ${props => props.theme.colors["base-input"]};
    transition: 0.2s;
    color: ${props => props.theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors["brand-yellow-dark"]}
    }

    &::placeholder {
        color: ${props => props.theme.colors["base-label"]};
    }
`