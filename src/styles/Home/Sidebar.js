import styled from 'styled-components';

import { primary, secondary, plainWhite } from '../Variables';

export const StyledSidebar = styled.div`
    display: flex;
    z-index: -1;
    opacity: 1;
    width: 100vw;
    
    .sidebar-overlay#side-open, .sidebar#side-open {
        transform: translateX(0vw);
        span, a {
            color: ${primary(1)};
            margin: 1em 0;
            opacity: 1;

            @media (hover: hover) {
                &:hover {
                    color: ${secondary()};
                }
            }
        }

        a:nth-child(5) {
            color: green;
            padding: 0.5em 2.5em;
            text-transform: capitalize;
            transition: all 400ms ease;

            @media (hover: hover) {
                &:hover {
                    color: ${plainWhite()};
                }
            }
        }
    }
    .sidebar-overlay#side-close, .sidebar#side-close {
        transform: translateX(100vw);
        span, a {
            color: ${primary(0)};
            margin: 5em 0;
        }

        a:nth-child(5) {
            padding: 0.5em 2.5em;
            text-transform: capitalize;
            color: rgba(0,128,0,0);
            border: 2px solid rgba(0,128,0,0);
        }
    }
    .sidebar-overlay {
        position: fixed;
        height: 100vh;
        width: 3vw;
        top: 0;
        left: 0;
        background-color: ${secondary()};
        transform: translateX(100vw);
        transition: transform 300ms cubic-bezier(.5,.15,.5,.85);
    }
    .sidebar {
        position: fixed;
        height: 100vh;
        width: 97vw;
        top: 0;
        right: 0;
        z-index: 2;
        background-color: ${plainWhite()};
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(100vw);
        transition: transform 300ms cubic-bezier(.5,.15,.5,.85);
        div {
            height: 60vh;
            width: 60vw;
            background-color: ${secondary(0)};
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            span, a {
                margin: 5em 0;
                font-size: 1.5rem;
                font-weight: 800;
                font-family: 'Montserrat-SemiBold';
                text-align: center;
                text-transform: uppercase;
                color: ${primary(0)};
                opacity: 0;
                cursor: pointer;
                transition: color 150ms ease, margin 500ms ease-in, opacity 500ms ease 200ms;
            }
        }
    }

    @media (min-width: 1200px){
        display: none;
    }

    /* For landscape phones */
    @media screen and (orientation:landscape) 
    and (max-device-height: 480px) {
        .sidebar div {
            margin-top: 15vh;
            span, a {
                font-size: 0.9rem;
            }
        }
    }
`;