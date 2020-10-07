import styled from 'styled-components';

import { secondary, plainWhite, outerSpacing } from '../Variables';

export const StyledHero = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${plainWhite(0)};

    #hero-wrapper {
        min-width: 100vw;
        min-height: 100vh;
        background-image: url('./assets/Backgrounds/Bg_Header.png');
        background-size: cover;
        z-index: 1;
        display: flex;
        flex-flow: column nowrap;
    
        .hero-text {
            width: 100vw;
            margin-top: 20vh;
            min-height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 0;

            h1 {
                font-size: 32px;
                line-height: 1.4;
                font-family: Montserrat-Light;
                text-align: center;
                margin: 0 1em;

                span:nth-child(2){
                    font-weight: 700;
                    font-family: Montserrat-Bold;
                }
                span:nth-child(4){
                    color: ${secondary()};
                    font-family: Montserrat-Bold;
                }
            }
        }

        .hero-img {
            width: 75vw;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10vh auto 0;
            padding-right: 0;

            img {
                transform: scaleX(-1);
                margin: 1em auto;
                max-width: 100%;
                max-height: 100%;
                display: block; 
            }
        }
    }

    /* Background optimization media queries */
    
    @media (min-width: 616px){
        #hero-wrapper {
            background-image: url('./assets/Backgrounds/Bg_Header@2x.png');
            background-size: cover;
        }
    }

    @media (min-width: 1232px){
        #hero-wrapper {
            background-image: url('./assets/Backgrounds/Bg_Header@3x.png');
            background-size: cover;
        }
    }

    /* Layout media queries */

    @media (min-width: 768px){
        #hero-wrapper {
            flex-flow: row nowrap;
            .hero-text {
                width: 50vw;
                padding-left: ${outerSpacing()};
                margin-top: 0;
                justify-content: flex-start;
                h1 {
                    font-size: 40px;
                    text-align: left;
                    margin: 0;
                }
            }

            .hero-img {
                width: 50vw;
                justify-content: flex-start;
                padding-right: ${outerSpacing()};
            }
        }
    }
`;