import styled from "styled-components";

export const LabelWithIconCheckoutContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    h2 {
        font-size: ${props => props.theme.textSizes["text-regular-m"]};
        color: ${props => props.theme.colors["base-subtitle"]};
        font-weight: 500;
    }
    h3 {
        font-size: ${props => props.theme.textSizes["text-regular-s"]};
        color: ${props => props.theme.colors["base-text"]};
        font-weight: 400;
    }
`