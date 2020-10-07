import styled from 'styled-components';

import { primary, secondary } from '../Variables';

export const StyledBurger = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-right: 1em;

    .nav-closed, .nav-open {
        align-self: center;
        display: block;
        width: 80%;
        min-width: 35px;
        height: 5px;
        position: relative;
        transition: background-color 150ms ease-in-out;
        
        &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 5px;
            top: -11px;
            background-color: ${primary()};
            transition: transform 150ms ease-in-out;
        }
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 5px;
            top: 11px;
            background-color: ${primary()};
            transition: transform 150ms ease-in-out;
        }
    }
    .nav-closed {
        background-color: ${primary()};
        &::before {
            transform: translateY(0px) rotate(0deg);
        }
        &::after {
            transform: translateY(0px) rotate(0deg);
        }
    }
    .nav-open {
        background-color: ${secondary(0)};
        &::before {
            transform: translateY(11px) rotate(45deg);
        }
        &::after {
            transform: translateY(-11px) rotate(-45deg);
        }
    }

    @media (min-width: 576px){
        margin-right: 3em;
    }
`;