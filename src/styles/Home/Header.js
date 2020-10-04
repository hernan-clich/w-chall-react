import styled from 'styled-components';

import { plainWhite, outerSpacing } from '../Variables';

export const StyledHeader = styled.header`
    min-width: 100vw;
    min-height: ${props => props.height};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 3;
    box-shadow: ${props => props.boxShadow};
    background-color: ${props => props.backgroundColor};
    transition: all 500ms ease-in-out;

    #header-wrapper {
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 250ms ease-in-out;
        background-color: ${plainWhite(0)};

        img {
            margin-left: ${outerSpacing()};
            width: clamp(150px, 15%, 30vw);
        }

        .header-right {
            display: flex;
            flex-flow: row nowrap;
            div {
                list-style: none;
                display: flex;
                flex-flow: row nowrap;

                span, a {
                    margin: 0.25em 2em;
                    padding: 0.25em 0em;
                    align-self: flex-end;
                    font-family: Montserrat-Bold;
                    font-size: 1.1rem;
                    cursor: pointer;
                    position: relative;

                    &::after {
                        position: absolute;
                        content: "";
                        height: 2px;
                        width: 50%;
                        bottom: -10%;
                        left: 25%;
                        right: 25%;
                        background-color: rgba(0, 0, 0, 0);
                        transition: all 90ms ease-in-out;
                    }

                    @media (hover: hover) {
                        &:hover {
                            &::after {
                                background-color: rgba(0, 0, 0, 1);
                                height: 2px;
                                width: 100%;
                                left: 0%;
                                right: 0%;
                                bottom: -10%;
                            }
                        }
                    }
                }
            }
        }
    }
`;