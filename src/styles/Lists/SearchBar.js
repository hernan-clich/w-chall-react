import styled from 'styled-components';

import { primary, secondary, plainWhite } from '../Variables';

export const StyledSearchBar = styled.div`
    min-width: 100vw;
    min-height: 70vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .list-img {
        min-width: 150px;
        width: 20vw;
        height: 7.5vh;
        margin-bottom: 2.5em;
        background: url('./assets/logo_full_color.svg') no-repeat;
        background-size: 100%;
    }

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

            @media (hover: hover) {
                &:hover {
                    box-shadow: 0px 0px 3px 0px rgba(189,189,189,1);
                }
            }
            
            &:focus {
                outline: none;
                box-shadow: 0px 0px 7px 0px rgba(189,189,189,1);
            }
        }
    }

    .list-radios {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-top: 1.5em;

        .single-list-radio {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            padding: 0.25em 0;
            margin: 0 0.5em;
            cursor: pointer;

            .list-radio-wrapper {
                width: 0.9em;
                height: 0.9em;
                margin: 0 0.5em;
                background-color: rgba(120, 120,120,1);
                clip-path: circle(50% at 50% 50%);
                position: relative;
                cursor: pointer;

                &::before {
                    position: absolute;
                    content:"";
                    top: 7.5%;
                    right: 7.5%;
                    bottom: 7.5%;
                    left: 7.5%;
                    background-color: ${plainWhite()};
                    clip-path: circle(50% at 50% 50%);
                }

                .list-radio-tick {
                    position: absolute;
                    content:""; 
                    clip-path: circle(0% at 50% 50%);
                    transition: clip-path 500ms ease;
                }
            }

            .radio-ticked.list-radio-wrapper  {
                background-color: ${primary()};

                .list-radio-tick {
                    
                    width: 100%;
                    height: 100%;
                    background-color: ${primary()};
                    clip-path: circle(30% at 50% 50%);
                }
            }

            label {
                font-family: 'Montserrat-Medium';
                font-size: 0.8rem;
                margin-right: 1em;
                cursor: pointer;
            }
        }
    }
    
    .list-sorting {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin-top: 2em;
        transition: all 250ms ease;

        p.sort-asc, p.sort-des {
            font-family: 'Montserrat-SemiBold';
            font-size: 0.75rem;
            cursor: pointer;
            position: relative;
            padding: 0.5em;

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

        p.sort-asc {
            span {
                color: ${primary()};
            }

            &::after {
                background-color: ${primary()};
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }

            @media (hover: hover) {
                &:hover {
                    > span {
                        text-shadow: -5px 5px 0px rgba(0, 230, 230, 0.5), -10px 10px 0px rgba(0, 204, 204, 0.3), -15px 15px 0px rgba(0, 189, 189, 0.1), 2px 2px 2px rgba(42,167,223,0);
                    }
                }
            }
        }            

        p.sort-des {
            span {
                color: ${secondary()};
            }

            &::after {
                background-color: ${secondary()};
                clip-path: polygon(50% 100%, 0 0, 100% 0);
            }

            @media (hover: hover) {
                &:hover {
                    > span {
                        text-shadow: -5px 5px 0px rgba(163, 204, 57, 0.5), -10px 10px 0px rgba(163, 204, 57, 0.3), -15px 15px 0px rgba(163, 204, 57, 0.1), 2px 2px 2px rgba(163,204,57,0);
                    }
                }
            }
        }
    }

    @media (min-width: 1361px){
        .list-img {
            margin-bottom: 5.5vh;
        }
        
        .list-search-input {

            &::after {
                width: 2.85%;
                height: 40%;
            }

            input[type="text"] {
                border-radius: 0.25em;
                font-size: 1.25vw;
                border: 0.05em solid rgba(190,190,190,1);

                @media (hover: hover) {
                    &:hover {
                        box-shadow: 0px 0px 0.25em 0px rgba(189,189,189,1);
                    }
                }
                
                &:focus {
                    outline: none;
                    box-shadow: 0px 0px 0.5em 0px rgba(189,189,189,1);
                }
            }
        }

        .list-radios {
            min-width: 5vw;
            height: 5vh;
            margin-top: 3vh;

            .list-radio-wrapper {
                min-width: 8%;
                padding-bottom:8%;
            }

            label {
                font-family: 'Montserrat-Medium';
                font-size: 1vw;
                margin: 0 1em 0 0.25em;
            }
        }

        .list-sorting {

            p.sort-asc, p.sort-des {
                font-size: 0.9vw;
                margin-top: 0;

                &::after {
                    width: 5%;
                    height: 80%;
                }
            }

            p.sort-asc {

                @media (hover: hover) {
                    &:hover {
                        > span {
                            text-shadow: -0.25em 0.25em 0px rgba(0, 230, 230, 0.5), -0.5em 0.5em 0px rgba(0, 204, 204, 0.3), -0.75em 0.75em 0px rgba(0, 189, 189, 0.1), 2px 2px 2px rgba(42,167,223,0);
                        }
                    }
                }
            }            

            p.sort-des {

                @media (hover: hover) {
                    &:hover {
                        > span {
                            text-shadow: -0.25em 0.25em 0px rgba(163, 204, 57, 0.5), -0.5em 0.5em 0px rgba(163, 204, 57, 0.3), -0.75em 0.75em 0px rgba(163, 204, 57, 0.1), 2px 2px 2px rgba(163,204,57,0);
                        }
                    }
                }
            }
        }
    }
`;