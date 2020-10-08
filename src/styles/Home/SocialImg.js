import styled from 'styled-components';

import { primary, secondary, plainWhite } from '../Variables';

export const StyledSocialImg = styled.div`
    width: 100%;
    min-height: 50vh;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: relative;

    .social-overlay {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url('./assets/img_woloxer.png');
        background-size: cover;
        z-index: -1;
    }

    h2 {
        font-size: 30px;
        font-family: Montserrat-Bold;
        margin-top: 2em;

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
        margin-top: 2em;
        height: 32px;

        img {
            width: 30px;
        }

        span {
            width: 50%;
            color: ${plainWhite()};
            font-family: Montserrat-Regular;
            margin-left: 1em;
            font-size: 12px;
        }
    }
        

    /* Background optimization media queries */

    @media (min-width: 1364px){
        #social-wrapper .social-img .social-overlay {
            background-image: url('./assets/img_woloxer@2x.png');
            background-size: cover;
        }
    }

    @media (min-width: 2727px){
        #social-wrapper .social-img .social-overlay {
            background-image: url('./assets/img_woloxer@3x.png');
            background-size: cover;
        }
    }

    /* Layout media queries */

    @media (min-width: 768px){

        h2 {
            font-size: 47px;
        }

        .social-twitter {
            margin-top: 3em;

            img {
                width: 25%;
            }

            span {
                margin-left: 1em;
                font-size: 19px;
            }
        }   
    }

    @media (min-width: 1361px){

        h2 {
            font-size: 3.5vw;
        }

        .social-twitter {
            margin: 5% 0 3em;

            img {
                width: 50%;
            }

            span {
                margin-left: 1em;
                font-size: 1.5vw;
            }
        }   
    }
`;