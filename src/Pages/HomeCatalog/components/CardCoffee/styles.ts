import styled from "styled-components";

export const CardCoffeContainer = styled.div`
    width: 100%;
    max-width: 16rem;
    background: ${props => props.theme.colors["base-card"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    border-radius: 6px 36px 6px 36px;
    text-align: center;

    img {
        margin-top: -2.5rem;
        width: 7.5rem;
        height: 7.5rem;
        margin-bottom: 0.75rem;
    }

    footer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > article {
            color: ${props => props.theme.colors["base-text"]};
            display: flex;
            gap: 3px;
            align-items: center;
            p {
                font-size: ${props => props.theme.textSizes["text-regular-s"]};
                line-height: 0.75rem;

            }
            span {
                font-size: ${props => props.theme.textSizes["title-title-m"]};
                font-family: ${props => props.theme.fonts.title};
            }
        }
    }
`

export const Tag = styled.div`
    font-size: ${props => props.theme.textSizes["components-tag"]};
    font-weight: bold;
    display: flex;
    gap: 4px;
    margin-bottom: 1rem;

    span {
        background: ${props => props.theme.colors["brand-yellow-light"]};
        color: ${props => props.theme.colors["brand-yellow-dark"]};
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 10px;
    }
`

export const Title = styled.h4`
    font-family: ${props => props.theme.fonts.title};
    font-weight: bold;
    font-size: ${props => props.theme.textSizes["title-title-s"]};
    color: ${props => props.theme.colors["base-subtitle"]};
    margin-bottom: 0.5rem;
`

export const Description = styled.p`
    font-size: ${props => props.theme.textSizes["text-regular-s"]};
    color: ${props => props.theme.colors["base-label"]};
    margin-bottom: 2rem;
`

export const AddCartItems = styled.div`
    width: 120px;
    display: flex;
    gap: px;

    > button {
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.colors["brand-purple-dark"]};
        color: ${props => props.theme.colors["base-card"]};
        border-radius: 6px;
        margin-left: 0.3rem;
        transition: 0.4s;
        &:hover {
        background: ${props => props.theme.colors["brand-purple"]};
        }
    }
`

