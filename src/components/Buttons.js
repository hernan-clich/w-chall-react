import styled from 'styled-components';

import { primary, plainWhite, outerSpacing} from '../styles/Variables';

const Button = styled.div`
    cursor: pointer;
    font-family: Montserrat-Regular, sans-serif;
    text-decoration: none;
    border-radius: 3em;
    padding: 0.5em 5em;
    text-transform: capitalize;
    font-weight: bolder;
    font-size: 0.9rem;
    text-align: center;
    border: none;
    vertical-align: middle;
    display: inline-block;

    @media (min-width: 1361px){
        font-size: 3vh;
        padding: 0.5em 2.5em;
    }
`;

export const LoginButton = styled(Button)`
    background-color: ${plainWhite()};
    color: ${primary()};
    border: 2px solid ${primary()};
    margin-right: ${outerSpacing()};
    transition: all 300ms ease-in-out;

    &:active {
        transform: scale(0.95);
    }
    
    @media (hover: hover) {
        &:hover {
            background-color: ${primary()};
            color: ${plainWhite()};
        }
    }

    @media (min-width: 1361px){
        font-size: 3vh;
        padding: 0.5em 2.5em;
        margin-right: 3vw;
    }
`;

export const ListButton = styled(LoginButton)`
    color: green;
    border: 2px solid green;

    @media (hover: hover) {
        &:hover {
            background-color: green;
        }
    }
`;

export const SocialButton = styled(Button)`
    background-color: ${plainWhite(0)};
    color: ${plainWhite()};
    border: 2px solid ${primary()};
    margin-top: 0;
    margin: 1em 0 3em;
    font-size: 1em;
    padding: 0.5em 4em;
    transition: all 300ms ease-in-out;

    &:active {
        transform: scale(0.95);
    }
    
    @media (hover: hover) {
        &:hover {
            background-color: ${plainWhite()};
            color: ${primary()};
        }
    }

    @media (min-width: 768px){
        margin-top: 1em;
        font-size: 1.25em;
    }

    @media (min-width: 1361px){
        font-size: 3vh;
        border: 0.15em solid ${primary()};
    }
`;

export const FooterButton = styled(Button)`
    background-color: ${primary()};
    color: ${plainWhite()};
    border: 2px solid ${primary(0)};
    font-size: 14px;
    padding: 1em 4em;
    font-family: Montserrat-Bold;
    box-shadow: 0px 0px 10px 0px rgba(217,217,217,1);
    transition: all 400ms ease-in-out;
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (hover: hover) {
        &:hover {
            background-color: ${plainWhite()};
            color: ${primary()};
            border: 2px solid ${primary(1)};
        }
    }

    @media (min-width: 768px){
        font-size: 18px;
    }

    @media (min-width: 1361px){
        font-size: 3vh;
    }
`;

export const BackHomeButton = styled(FooterButton)`
    position: absolute;
    content: "";
    top: 5%;
    right: 5%;
    text-decoration: none;
    font-family: 'Montserrat-SemiBold';
    margin: 0;
    padding: 0.5em 1em;
    font-size: 0.7rem;

    @media (min-width: 1361px){
        font-size: 1.2vw;
    }
`;

export const FormButton = styled(FooterButton)`
    padding: 0.5em 2em;
    font-size: 1rem;
    margin-top: 1em;
    outline: none;

    @media (min-width: 1361px){
        font-size: 1.5vw;
    }
`;

export const DisabledButton = styled(FooterButton)`
    padding: 0.5em 2em;
    font-size: 1rem;
    margin-top: 1em;
    background-color: rgba(160, 160, 160, 1);
    color: rgba(110, 110, 110, 1);
    box-shadow: 0px 0px 0px 0px rgba(217,217,217,1);
    border: none;

    @media (hover: hover) {
        &:hover {
            background-color: rgba(160, 160, 160, 1);
            color: rgba(110, 110, 110, 1);
            border: none;
            cursor: not-allowed;
        }
    }

    @media (min-width: 1361px){
        font-size: 1.5vw;
    }
`;