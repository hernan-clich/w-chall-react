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
`;

export const SocialButton = styled(Button)`
    background-color: ${plainWhite(0)};
    color: ${plainWhite()};
    border: 2px solid ${primary()};
    margin-top: 1em;
    font-size: 1.5vw;
    padding: 0.5em 4em;
`;