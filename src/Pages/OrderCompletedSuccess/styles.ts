import styled from "styled-components";

export const OrderCompletedSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-top: 5rem;

    h2 {
        font-family: ${props => props.theme.fonts.title};
        font-size: ${props => props.theme.textSizes["title-title-l"]};
        color: ${props => props.theme.colors["brand-yellow-dark"]};
    }
    p {
        font-size: ${props => props.theme.textSizes["text-regular-l"]};
        color: ${props => props.theme.colors["base-subtitle"]};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const OrderDetailsSuccess = styled.div`
    position: relative;
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${props => props.theme.colors["base-background"]};
    min-width: 32rem;
    
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 8px 38px 8px 38px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
        z-index: -1;
    }
`