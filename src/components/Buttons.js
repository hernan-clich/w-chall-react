import styled from 'styled-components';

import { primary, plainWhite, outerSpacing} from '../styles/Variables';

const Button = styled.div`
    cursor: pointer;
    font-family: Montserrat-Regular, sans-serif;
    text-decoration: none;
    border-radius: 32px;
    padding: 0.5em 5em;
    text-transform: capitalize;
    font-weight: bolder;
    font-size: 0.9rem;
    /* max-width: ${props => props.as === 'a' ? '50%' : '100%'}; */
    text-align: center;
    border: none;
    vertical-align: middle;
    display: inline-block;
`;

export const NavButton = styled(Button)`
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
`;

export const SocialButton = styled(Button)`
    background-color: ${plainWhite(0)};
    color: ${plainWhite()};
    border: 2px solid ${primary()};
    margin-top: 1em;
    font-size: 1.5vw;
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
`;

export const FooterButton = styled(Button)`
    background-color: ${primary()};
    color: ${plainWhite()};
    border: 2px solid ${primary(0)};
    font-size: 1.3vw;
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
`;