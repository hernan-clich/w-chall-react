import styled from 'styled-components';

import { primary, secondary } from '../Variables';

export const StyledSocial = styled.section`
    min-width: 100vw;
    min-height: 70vh;

    #social-wrapper {
        min-width: 100vw;
        min-height: 70vh;
        display: flex;
        flex-flow: column wrap;

        .social-img {
            min-width: 100vw;
            width: 100vw;
            min-height: 50vh;
        }

        .social-text {
            min-width: 100vw;
            width: 100vw;
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(242, 245, 250, 1);

            h2 {
                text-align: center;
                font-size: 25px;
                margin: 3em 0.5em;
                
                span:nth-child(2) {
                    color: ${primary()};
                    font-family: Montserrat-Bold;
                }

                span:nth-child(3) {
                    color: ${secondary()};
                    font-family: Montserrat-Bold;
                }
            }
        }
    }

    /* Layout media queries */

    @media (min-width: 768px){
        #social-wrapper {
            flex-flow: row wrap;

            .social-img {
                min-width: 55vw;
                width: 55vw;
            }

            .social-text {
                min-width: 45vw;
                width: 45vw;
                h2 {
                    font-size: 40px;
                }
            }
        }
    }
`;