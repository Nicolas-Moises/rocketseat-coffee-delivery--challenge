import styled from "styled-components";
import { DefaultContentContainer } from "../../styles";

export const CheckoutCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    h4 {
        font-family: ${props => props.theme.fonts.title};
        font-size:  ${props => props.theme.textSizes["title-title-xs"]};
        color: ${props => props.theme.colors["base-subtitle"]};
    }
`

export const CheckoutDetailsContainer = styled(DefaultContentContainer)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CheckoutCardDetailsContainer = styled.div`
    display: flex;
    gap: 3.125rem;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors["base-button"]};

    section {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }

        > div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 10.685rem;

            h5 {
                font-size: ${props => props.theme.textSizes["text-regular-m"]};
                color: ${props => props.theme.colors["base-subtitle"]};
                font-weight: 400;
            }

            > div {
                display: flex;
                gap: 0.5rem;
            }
        }
    }

    span {
        font-size: ${props => props.theme.textSizes["text-bold-m"]};
        color: ${props => props.theme.colors["base-text"]};
    }
`

export const RemoveItemButton = styled.button`
    background: ${props => props.theme.colors["base-button"]};
    align-items: center;
    display: flex;
    gap: 4px;
    border-radius: 6px;
    padding: 0.5rem;
    border: none;
    font-size: ${props => props.theme.textSizes["components-button-s"]};
    color: ${props => props.theme.colors["base-text"]};
    text-transform: uppercase;
    transition: 0.2s;

    svg {
        color: ${props => props.theme.colors["brand-purple"]};
    }

    &:hover {
        background: ${props => props.theme.colors["base-hover"]};
        color: ${props => props.theme.colors["base-subtitle"]};
        
        svg {
            color: ${props => props.theme.colors["brand-purple-dark"]};
        }
    }
`

export const CheckoutConfirmedInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5 {
            color: ${props => props.theme.colors["base-text"]};
            font-size: ${props => props.theme.textSizes["text-regular-m"]};
            font-weight: 400;
        }

        h3 {
            color: ${props => props.theme.colors["base-subtitle"]};
            font-size: ${props => props.theme.textSizes["text-bold-l"]};
        }
    }
`

export const ButtonPaymentConfirmation = styled.button`
    height: 2.875rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    padding: 0.5rem;
    font-size: ${props => props.theme.textSizes["components-button-g"]};

    background: ${props => props.theme.colors["brand-yellow"]};
    color: ${props => props.theme.colors["base-white"]};
    border: none;
    border-radius: 8px;

    &:not(:disabled):hover {
        background: ${props => props.theme.colors["brand-yellow-dark"]};
        transition: 0.2s;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`