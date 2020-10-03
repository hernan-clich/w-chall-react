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
        flex-flow: row nowrap;
    
        .hero-text {
            width: 50vw;
            display: flex;
            align-items: center;
            padding-left: ${outerSpacing()};
            h1 {
                font-size: 3vw;
                line-height: 1.4;
                font-family: Montserrat-Light;
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
            width: 50vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
                transform: scaleX(-1);
                margin: 3em 0 0 4em;
            }
        }
    }

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
`;