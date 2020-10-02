import styled from 'styled-components';

import { plainWhite, outerSpacing } from '../Variables';

export const StyledHeader = styled.header`
    min-width: 100vw;
    min-height: 20vh;
    background-color: ${plainWhite()};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 3;

    #header-wrapper {
        min-height: 6vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        img {
            margin-left: ${outerSpacing()};
            width: clamp(150px, 15%, 30vw);
        }

        .header-right {
            display: flex;
            flex-flow: row nowrap;
            ul {
                list-style: none;
                display: flex;
                flex-flow: row nowrap;

                li {
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
                        height: 0px;
                        width: 50%;
                        bottom: -10%;
                        left: 25%;
                        right: 25%;
                        background-color: black;
                        transition: all 90ms ease-in-out;
                    }

                    @media (hover: hover) {
                        &:hover {
                            &::after {
                                background-color: black;
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