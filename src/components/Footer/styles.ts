import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors["base-button"]};
    margin-top: 3rem;
    span {
        font-size: ${props => props.theme.textSizes["text-regular-s"]};
        color: ${props => props.theme.colors["base-label"]};
    }

    div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    a {
        color: ${props => props.theme.colors["brand-purple"]};
        transition: 0.2s;

        &:hover {
            color: ${props => props.theme.colors["brand-purple-dark"]};
            transform: translateY(-2px);
            
        }
    }

`