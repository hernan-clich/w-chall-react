import styled from 'styled-components';

import { primary } from '../Variables';

export const StyledFooter = styled.footer`
    min-width: 100vw;
    min-height: 75vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    position: relative;

    &::before {
        position: absolute;
        content: "";
        top: -25%;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-image: url('./assets/Backgrounds/Bg_Footer.png');
        background-size: cover;
    }

    #footer-content {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        h2 {
            padding: 0.25em;
            font-size: 30px;
            font-family: Montserrat-SemiBold;
            margin: 3em 0.5em 1.5em;
            text-align: center;

            span {
                color: ${primary()};
            }
        }

        h3 {
            padding: 0.25em;
            font-size: 22px;
            font-family: Montserrat-Regular;
            margin-bottom: 0;
            margin: 0 0.5em 0.5em;
            text-align: center;
        }
    }

    .footer-logo {
        display: flex;
        justify-content: center;
        
        img {
            margin: 6em 0.5em 3em;
        }
    }

    /* Background optimization media queries */

    @media (min-width: 1364px){
        &::before {
            background-image: url('./assets/Backgrounds/Bg_Footer@2x.png');
            background-size: cover;
        }
    }

    @media (min-width: 2782px){
        &::before {
            background-image: url('./assets/Backgrounds/Bg_Footer@3x.png');
            background-size: cover;
        }        
    }

    /* Layout media queries */

    @media (min-width: 768px){

        #footer-content {

            h2 {
                padding: 0.25em;
                font-size: 44px;
            }

            h3 {
                padding: 0.25em;
                font-size: 32px;
                margin-bottom: 1.5em;
            }
        }
    }

    @media (min-width: 1361px){

        #footer-content {

            h2 {
                padding: 0.25em;
                font-size: 3.5vw;
                margin: 2em 0.5em 0.5em;
            }

            h3 {
                padding: 0.25em;
                font-size: 2vw;
                margin-bottom: 1.5em;
            }
        }

        .footer-logo img {
            margin: 6em 0.5em 3em;
            width: 7.5vw;
        }
    }
`;