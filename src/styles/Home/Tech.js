import styled from 'styled-components';

import { plainWhite, outerSpacing } from '../Variables';

export const StyledTech = styled.section`
    min-width: 100vw;
    min-height: 80vh;
    background-color: ${plainWhite()};
    display: flex;
    flex-flow: row wrap;

    #tech-wrapper {
        min-width: 100vw;
        min-height: 80vh;
        display: flex;
        flex-flow: row wrap;

        .tech-text {
            min-width: 50vw;
            height: 90%;
            display: flex;
            align-items: center;
            padding-left: ${outerSpacing()};
            line-height: 1.4;
            flex-grow: 1;

            h2 {
                font-size: 2.25vw;
            }
        }

        .tech-img {
            min-width: 50vw;
            height: 90%;
            display: flex;
            align-items: center;
            flex-grow: 1;

            img {
                width: 80%;
            }
        }
    }
`;