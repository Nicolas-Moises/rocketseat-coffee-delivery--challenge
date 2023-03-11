import styled, { css } from "styled-components";

export const FieldInputLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;
    p {
        color: ${props => props.theme.colors["base-error"]};
        font-size: ${props => props.theme.textSizes["components-button-s"]};
        margin-left: 0.3rem;
    }
`

interface InputFieldContainerProps {
    hasErrors: boolean;
}

export const InputFieldContainer = styled.div<InputFieldContainerProps>`
    height: 3rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors["base-button"]};
    background: ${props => props.theme.colors["base-input"]};
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    
    &:focus-within {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors["brand-yellow-dark"]}
    }
    ${(props) =>
        props.hasErrors && css`
            box-shadow: 0 0 0 2px ${(props) => props.theme.colors["base-error"]}
        `
    }
    
`

export const InputComponent = styled.input`
    background: none;
    flex: 1;
    border: none;
    height: 100%;
    color: ${props => props.theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
            color: ${props => props.theme.colors["base-label"]};
        }
`

export const TextInsideInput = styled.span`
    font-style: italic;
    font-size: ${props => props.theme.textSizes["components-button-s"]};
    margin-right: 1rem;
    color: ${props => props.theme.colors["base-label"]};
`