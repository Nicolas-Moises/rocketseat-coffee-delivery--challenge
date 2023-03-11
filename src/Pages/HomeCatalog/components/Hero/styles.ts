import styled from "styled-components";

import { rgba } from "polished";

export const HeroContainer = styled.section`
    width: 100%;
    height: 34rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 5.875rem;
    
    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3.5rem;

        div {
            h1 {
                font-family: ${props => props.theme.fonts.title};
                font-size: ${props => props.theme.textSizes["title-title-xl"]};
                font-weight: 800;
                color: ${props => props.theme.colors["base-title"]};
                margin-bottom: 1rem;
                line-height: 1.3;
            }
            span {
                font-size: ${props => props.theme.textSizes["text-regular-l"]};
                color: ${props => props.theme.colors["base-subtitle"]};
            }
            p {
                font-size: ${props => props.theme.textSizes["text-regular-m"]};
                color: ${props => props.theme.colors["base-text"]};
            }
        }
    }
`

export const HeroBenefitsIconContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    width: 100%;
    margin-top: 4.125rem;
`