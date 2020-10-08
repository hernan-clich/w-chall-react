import styled from 'styled-components';

import { primary, secondary } from '../../styles/Variables';

export const StyledListItem = styled.div`
    min-width: 95vw;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    word-wrap: break-word;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        width: 90%;
        top: 0%;
        left: 4%;
        height: 1px;
        background-color: rgba(220,220,220,1);
    }

    .list-top {
        max-height: 20vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .list-logo {
            height: 3rem;
            width: 3rem;
            border-radius: 10px;
            margin-left: 1em;
            border: 2px solid black;
            flex-shrink: 0;
            background-color: white;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 80%;
        }

        .list-tech {
            min-height: 100%;
            min-width: 24vw;
            width: auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            margin-left: 5%;
            justify-self: flex-start;

            .tech-header {
                font-size: 0.7rem;
                font-family: Montserrat-Bold;
            }

            .tech-subheader {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                font-size: 0.65rem;
                font-family: Montserrat-Bold;
                color: rgba(90,90,90,1);
                padding: 0.2em 0;

                p:nth-child(2) {
                    font-family: Montserrat-SemiBoldItalic;
                    font-size: 0.6rem;
                    padding: 0.1em 0;
                }

                p:nth-child(3) {
                    font-family: Montserrat-SemiBoldItalic;
                    font-size: 0.55rem;
                }
            }
        }
    }

    .list-bottom {
        max-height: 20vh;
        width: 50%;
        display: flex;
        margin-right: 2.5%;

        .list-author {
            min-height: 100%;
            min-width: 25vw;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: center;
            font-size: 0.6rem;
            line-height: 1.4;
            font-family: Montserrat-SemiBold;
            padding-left: 1em;

            p:nth-child(1) {
                font-family: 'Montserrat-SemiBoldItalic';
                font-size: 0.55rem;
            }
        }

        .list-type {
            min-height: 100%;
            min-width: 25vw;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: center;
            font-size: 0.7rem;
            font-family: Montserrat-Bold;

            .list-type-wrapper {
                margin-left: 0.5em;

                p[data-type='Mobile'] {
                    color: crimson;
                }

                p[data-type='Back-End'] {
                    color: ${secondary()};
                }

                p[data-type='Front-End'] {
                    color: ${primary()};
                }
            }
        }
    }

    @media (min-width: 576px){
        .list-top {
            
            .list-logo {
                height: 4rem;
                width: 4rem;
            }

            .list-tech {

                .tech-header {
                    font-size: 1rem;
                }

                .tech-subheader {
                    font-size: 0.8rem;
                    padding: 0.2em 0;

                    p:nth-child(2) {
                        font-size: 0.7rem;
                        padding: 0.3em 0;
                    }

                    p:nth-child(3) {
                        font-size: 0.6rem;
                    }
                }
            }
        }

        .list-bottom {

            .list-author {
                font-size: 0.8rem;
                padding-left: 1em;

                p:nth-child(1) {
                    font-family: 'Montserrat-SemiBoldItalic';
                    font-size: 0.7rem;
                }
            }

            .list-type {
                font-size: 0.9rem;
            }
        }
    }

    @media (min-width: 1361px){
        &::after {
            height: 0.1em;
        }

        .list-top {
            
            .list-logo {
                height: 50%;
                width: 10%;
                border-radius: 0.75em;
                border: 0.2em solid black;
            }

            .list-tech {

                .tech-header {
                    font-size: 1.25vw;
                }

                .tech-subheader {
                    font-size: 0.9vw;

                    p:nth-child(2) {
                        font-size: 0.8vw;
                    }

                    p:nth-child(3) {
                        font-size: 0.75vw;
                    }
                }
            }
        }

        .list-bottom {

            .list-author {
                font-size: 0.95vw;

                p:nth-child(1) {
                    font-size: 0.8vw;
                }
            }

            .list-type {
                font-size: 1.1vw;
            }
        }
    }
`;