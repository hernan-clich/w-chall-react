import styled from 'styled-components';

import { plainWhite, outerSpacing } from '../Variables';

export const StyledHeader = styled.header`
    min-width: 100vw;
    min-height: ${props => props.height};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 3;
    box-shadow: ${props => props.boxShadow};
    background-color: ${props => props.backgroundColor};
    transition: min-height 500ms ease-in-out,  box-shadow 500ms ease-in-out;

    #header-wrapper {
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 250ms ease-in-out;
        background-color: ${plainWhite(0)};

        img {
            margin-left: 1.25em;
            width: clamp(100px, 15%, 30vw);
            z-index: 1;
        }
    }

    @media (min-width: 576px){
        
        #header-wrapper {

            img {
                margin-left: ${outerSpacing()};
                width: clamp(150px, 15%, 30vw);
            }
        }
    }
`;