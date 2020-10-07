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
        flex-flow: column wrap;

        .tech-text {
            min-width: 100vw;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 0;
            line-height: 1.3;
            flex-grow: 1;

            h2 {
                font-size: 24px;
                text-align: center;
                padding: 0 0.5em;
            }
        }

        .tech-img {
            width: 100vw;
            height: 50%;
            display: flex;
            align-items: center;
            flex-grow: 1;
            margin: 0 auto;
            padding: 2em 1em;

            img {
                margin: 1em auto;
                max-width: 100%;
                max-height: 100%;
                display: block; 
            }
        }
    }

    @media (min-width: 768px){
        #tech-wrapper {
            min-width: 100vw;
            min-height: 90vh;
            flex-flow: row wrap;

            .tech-text {
                min-width: 48vw;
                width: 48vw;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: ${outerSpacing()};

                h2 {
                    font-size: 29px;
                    text-align: left;
                    margin-right: 1.5em;
                }
            }

            .tech-img {
                min-width: 52vw;
                width: 52vw;
                height: 100%;
                padding: 0 2em 0 0;
                
                img {
                    margin: 0;
                }
            }
        }
    }
`;