import styled from "styled-components";

export const MenuCoffeeContainer = styled.div`
    padding: 2rem 0;
    width: 100%;

    h2 {
        font-family: ${props => props.theme.fonts.title};
        font-size: ${props => props.theme.textSizes["title-title-l"]};
        color: ${props => props.theme.colors["base-subtitle"]};
        font-weight: bold;
        margin-bottom: 3.375rem;
    }

    > div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        row-gap: 2.5rem;
        margin-top: 3.5rem;
    }
`