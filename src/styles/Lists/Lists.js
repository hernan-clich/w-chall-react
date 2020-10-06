import styled from 'styled-components';

import { primary, secondary } from '../Variables';

export const StyledLists = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    margin-top: 20vh;

    h2 {
        text-align: center;
        margin-top: 2em;
    }

    #list-search-wrapper {
        min-width: 100vw;
        min-height: 50vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

        .list-search-input {
            min-width: 200px;
            width: 50%;
            position: relative;

            &::after {
                position: absolute;
                content:"";
                width: 20px;
                height: 20px;
                background: url(./assets/lists-search.svg) no-repeat;
                background-size: cover;
                right: 5%;
                top: 50%;
                z-index: 1;
                transform: translateY(-50%);
            }

            input[type="text"] {
                padding: 0.75em 0 0.75em 1.5em;
                width: 100%;
                border-radius: 5px;
                font-size: 1rem;
                border: 1px solid rgba(190,190,190,1);
                transition: box-shadow 250ms ease-in-out;
                font-family: 'Montserrat-SemiBold';

                &:hover {
                    box-shadow: 0px 0px 3px 0px rgba(189,189,189,1);
                }
                
                &:focus {
                    outline: none;
                    box-shadow: 0px 0px 7px 0px rgba(189,189,189,1);
                }
            }
        }

        .list-radios {
            input {
                margin: 2em 0.75em 0;
                cursor: pointer;
            }
        }
        
        .list-sorting {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            margin-top: 2em;
            transition: all 250ms ease;

            p.ascendente, p.descendente {
                font-family: 'Montserrat-SemiBold';
                font-size: 0.9rem;
                cursor: pointer;
                position: relative;

                &::after {
                    position: absolute;
                    content: "";
                    width: 14px;
                    height: 14px;
                    top: 50%;
                    right: -8.5%;
                    pointer-events: none;
                    transform: translateY(-50%);
                    transition: all 150ms ease;
                }
                
                span {
                    font-family: 'Montserrat-SemiBoldItalic';
                    transition: text-shadow 300ms ease;
                }
            }

            p.ascendente {
                span {
                    color: ${primary()};
                }

                &::after {
                    background-color: ${primary()};
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }

                &:hover {
                    > span {
                        text-shadow: -5px 5px 0px rgba(0, 230, 230, 0.5), -10px 10px 0px rgba(0, 204, 204, 0.3), -15px 15px 0px rgba(0, 189, 189, 0.1), 2px 2px 2px rgba(42,167,223,0);
                    }
                }
            }            

            p.descendente {
                span {
                    color: ${secondary()};
                }

                &::after {
                    background-color: ${secondary()};
                    clip-path: polygon(50% 100%, 0 0, 100% 0);
                }

                &:hover {
                    > span {
                        text-shadow: -5px 5px 0px rgba(163, 204, 57, 0.5), -10px 10px 0px rgba(163, 204, 57, 0.3), -15px 15px 0px rgba(163, 204, 57, 0.1), 2px 2px 2px rgba(163,204,57,0);
                    }
                }
            }
        }
    }

    #list-wrapper {
        min-width: 100vw;
        min-height: 20vh;
    }

    .list-counter-wrapper {
        min-width: 100vw;
        max-height: 50vh;
        min-height: 30vh;
        background-color: rgba(40,40,40,1);
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-family: 'Montserrat-SemiBoldItalic';
            color: rgba(225,225,225,1);
            padding: 0 1em;
            text-align: center;
        }
    }
`;