import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: ${props => props.theme.colors["base-background"]};

    display: flex;
    justify-content: space-between;
    padding: 2rem 0;

    img {
        width: 5.25rem;
    }

    nav {
        display: flex;
        gap: 0.75rem;
        align-items: center;

        span {
            display: flex;
            align-items: center;
            gap: 4px;

            padding: 8px;
            border-radius: 6px;
            color: ${props => props.theme.colors["brand-purple-dark"]};
            background: ${props => props.theme.colors["brand-purple-light"]};
            font-size: ${props => props.theme.textSizes["text-regular-s"]};

            svg {
                color: ${props => props.theme.colors["brand-purple"]};
            }
        }

        div {
            position: relative;
            display: flex;
            align-items: center;
            gap: 4px;

            padding: 8px;
            border-radius: 6px;

            color: ${props => props.theme.colors["brand-yellow-dark"]};
            background: ${props => props.theme.colors["brand-yellow-light"]};
            border: 2px solid ${props => props.theme.colors["base-background"]};

            &.active {
                outline: 0;
                border: 2px solid ${props => props.theme.colors["base-background"]};
                box-shadow: 0 0 0 2px ${(props) => props.theme.colors["brand-yellow-dark"]};
            }

            > span {
                position: absolute;
                top: -8px;
                right: -8.35px;
                font-size: ${props => props.theme.textSizes["text-bold-s"]};
                color: ${props => props.theme.colors["base-white"]};
                background-color: ${props => props.theme.colors["brand-yellow-dark"]};
                border-radius: 50%;
                width: 1.25rem;
                height: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`