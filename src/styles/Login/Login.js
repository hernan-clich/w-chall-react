import styled from 'styled-components';
import { primary, plainWhite } from '../Variables';

export const StyledLogin = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-image: url('./assets/Backgrounds/Bg_Header.png');
        background-size: cover;
    }

    #form-wrapper {
        width: 90vw;
        height: 70vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, rgba(151,207,0,0.6) 0%, rgba(0,169,229,0.6) 100%);
        box-shadow: 0px 0px 15px 0px rgba(212,212,212,1);
        border-radius: 1rem;

        h2 {
            margin-bottom: 1.5em;
        }
        
        form {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;

            .input-wrapper {
                position: relative;
                width: 80%;
                margin: 0;
                padding: 0;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                cursor: default;

                label {
                    position: absolute;
                    top: 1.8em;
                    left: 1em;
                    color: rgba(140,140,140,1);
                    font-size: 0.8rem;
                    font-weight: 600;
                    pointer-events: none;
                    transition: all 350ms ease;
                }

                input {
                    height: 2.5em;
                    margin: 1em 0;
                    border-radius: 32px;
                    border: none;
                    padding: 1em;
                    font-weight: 600;
                    width: 100%;

                    &:focus {
                        outline: none;
                        box-shadow: 0px 0px 2px 2px rgba(140,140,140,1);
                    }
                    
                    &:focus + label {
                        top: -0.5em;
                        font-size: 0.75rem;
                        color: rgba(0,0,0,1);
                    }
                }

                input[type='password'] {
                    letter-spacing: 4px;
                    font-family: 'Montserrat-Black';
                }

                .input-not-empty {
                    + label {
                        top: -0.5em;
                        font-size: 0.75rem;
                        color: rgba(0,0,0,1);
                    }
                }

                .input-valid {
                    border: 3px solid rgb(0, 156, 0);
                    outline: none;
                    
                    &:focus {
                        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
                    }
                }

                .input-invalid {
                    border: 3px solid rgb(168, 0, 0);
                    outline: none;

                    &:focus {
                        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
                    }
                }

                p {
                    margin: 0;
                    color: rgb(190, 0, 0);
                    font-weight: bolder;
                    font-style: oblique;
                    font-size: 0.75rem;
                    opacity: 0;
                    height: 0;
                }
                .input-invalid ~ p {
                    margin-bottom: 1.3em;
                    opacity: 1;
                    height: auto;
                }
            }

            .checkbox-wrapper {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                margin: 1em 0;
                z-index: 1;
                padding: 0.25em;
                
                .form-checkbox {
                    width: 1em;
                    height: 1em;
                    background-color: ${plainWhite()};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid rgba(1,1,1,1);
                    border-radius: 2px;
                    cursor: pointer;
                    z-index: 1;

                    .form-checkbox-tick {
                        width: 0.8em;
                        height: 0.8em;
                        background-color: ${primary()};
                        clip-path: polygon(0 64%, 12% 50%, 40% 70%, 84% 0, 100% 8%, 44% 100%);
                    }
                }

                p {
                    padding-left: 1em;
                    font-size: 0.8rem;
                    font-family: Montserrat-SemiBold;
                    cursor: pointer;
                }
            }
        }
    }

    /* Background optimization media queries */

    @media (min-width: 616px){
        &::before {
            background-image: url('./assets/Backgrounds/Bg_Header@2x.png');
            background-size: cover;
        }
    }

    @media (min-width: 1232px){
        &::before {
            background-image: url('./assets/Backgrounds/Bg_Header@3x.png');
            background-size: cover;
        }
    }

    /* Layout media queries */

    @media (min-width: 576px){
        #form-wrapper {
            width: 40vw;
        }
    }

    @media (min-width: 1361px){
        #form-wrapper {

            h2 {
                font-size: 2vw;
            }
            
            form {

                .input-wrapper {

                    label {
                        font-size: 1.1vw;
                    }

                    input {
                        font-size: 1.15vw;

                        &:focus {
                            box-shadow: 0px 0px 0.15em 0.15em rgba(140,140,140,1);
                        }
                        
                        &:focus + label {
                            font-size: 1vw;
                        }
                    }

                    .input-not-empty {
                        + label {
                            font-size: 1vw;
                        }
                    }

                    .input-valid {
                        border: 0.15em solid rgb(0, 156, 0);
                    }

                    .input-invalid {
                        border: 0.15em  solid rgb(168, 0, 0);
                    }

                    p {
                        font-size: 1.25vw;
                    }
                }

                .checkbox-wrapper {
                    width: 50%;

                    .form-checkbox {
                        min-width: 7.5%;
                        min-height: 100%;
                        border: 0.2em solid rgba(1,1,1,1);
                        border-radius: 2px;

                        .form-checkbox-tick {
                            width: 70%;
                            height: 70%;
                        }
                    }

                    p {
                        font-size: 1.1vw;
                    }
                }
            }
        }
    }
`;