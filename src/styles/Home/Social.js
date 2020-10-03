import styled from 'styled-components';

import { primary, secondary, plainWhite } from '../Variables';

export const StyledSocial = styled.section`
    min-width: 100vw;
    min-height: 70vh;

    #social-wrapper {
        min-width: 100vw;
        min-height: 70vh;
        display: flex;
        flex-flow: row wrap;

        .social-img {
            min-width: 55vw;
            background-image: url('./assets/img_woloxer.png');
            background-size: cover;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;

            h2 {
                font-size: 3.5vw;
                font-family: Montserrat-Bold;

                span:nth-child(1) {
                    color: ${secondary()};
                }

                span:nth-child(2) {
                    color: ${primary()};
                }
            }

            .social-twitter {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                margin-top: 3em;

                img {
                    width: 25%;
                }

                span {
                    color: ${plainWhite()};
                    font-family: Montserrat-Regular;
                    margin-left: 1em;
                    font-size: 1.4vw;
                }
            }
        }

        .social-text {
            min-width: 45vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(242, 245, 250, 1);

            h2 {
                text-align: center;
                font-size: 3vw;
                
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

    @media (min-width: 1364px){
        #social-wrapper .social-img {
            background-image: url('./assets/img_woloxer@2x.png');
            background-size: cover;
        }
    }

    @media (min-width: 2727px){
        #social-wrapper .social-img {
            background-image: url('./assets/img_woloxer@3x.png');
            background-size: cover;
        }
    }
`;