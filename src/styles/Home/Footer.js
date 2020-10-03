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
            font-size: 3.25vw;
            font-family: Montserrat-SemiBold;

            span {
                color: ${primary()};
            }
        }

        h3 {
            padding: 0.25em;
            font-size: 2.35vw;
            font-family: Montserrat-Regular;
            margin-bottom: 1.5em;
        }
    }

    .footer-logo {
        display: flex;
        justify-content: center;
        
        img {
            margin-bottom: 3em;
        }
    }

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
`;