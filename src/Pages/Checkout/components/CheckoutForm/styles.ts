import styled from "styled-components";
import { DefaultContentContainer } from "../../styles";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CheckoutFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    > h4 {
        font-family: ${props => props.theme.fonts.title};
        font-size:  ${props => props.theme.textSizes["title-title-xs"]};
        color: ${props => props.theme.colors["base-subtitle"]};
    }
`

export const FormLayout = styled(DefaultContentContainer)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AddressFormContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .cep {
        grid-column: span 3;
        max-width: 12.5rem;
    }

    .street {
        grid-column: span 3;
    }

    .complement {
        grid-column: span 2;
    }
`

export const BillingOptionsContainer = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
`

export const BillingTypeButton = styled(RadioGroup.Item)`
    padding: 0 1rem;
    height: 3rem;
    background: ${props => props.theme.colors["base-button"]};
    font-size: ${props => props.theme.textSizes["components-button-s"]};
    color: ${props => props.theme.colors["base-text"]};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    border: none;
    border-radius: 8px;

    svg {
        color: ${props => props.theme.colors["brand-purple"]};
    }

    &:hover:not(svg){
        background: ${props => props.theme.colors["base-hover"]};
        color: ${props => props.theme.colors["base-subtitle"]};
        transition: 0.2s;
    }

    &[data-state='checked']{
        background: ${props => props.theme.colors["brand-purple-light"]};
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.colors["brand-purple"]};
    }
`