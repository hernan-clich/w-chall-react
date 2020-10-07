import styled from 'styled-components';

export const StyledNavLinks = styled.div`
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
            text-decoration: none;
            color: black;

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

    @media (min-width: 1361px){
        div {

            span, a {
                font-size: 1.5vw;

                &::after {
                    height: 0.3vh;
                }

                @media (hover: hover) {
                    &:hover {
                        &::after {
                            height: 0.3vh;
                        }
                    }
                }
            }
        }
    }
`;