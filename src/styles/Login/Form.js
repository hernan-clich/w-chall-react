import styled from 'styled-components';

export const StyledForm = styled.div`
    min-height: 100vh;
    min-width: 100vh;
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
        width: 60vw;
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
                    font-size: 0.8rem;
                    font-weight: 600;
                    pointer-events: none;
                    transition: all 350ms ease;
                }

                img {
                    position: absolute;
                    width: clamp(20px, 2%, 4%);
                    left: 7.5%;
                    top: 50%;
                    transform: translateY(-50%);
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
                
                input {
                    cursor: pointer;
                }

                p {
                    padding-left: 1em;
                    font-size: 0.8rem;
                    font-family: Montserrat-SemiBold;
                }
            }
        }
    }

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
`;