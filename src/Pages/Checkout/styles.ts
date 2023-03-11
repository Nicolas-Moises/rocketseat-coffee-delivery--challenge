import styled from "styled-components";

export const CheckoutContainer = styled.form`
    padding: 2.5rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`

export const DefaultContentContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.colors["base-card"]};
    border-radius: 8px;
    padding: 2.5rem;
`