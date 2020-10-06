import styled from 'styled-components';

export const StyledListItem = styled.div`
    min-width: 95vw;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    word-wrap: break-word;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        width: 90%;
        top: 0%;
        left: 4%;
        height: 1px;
        background-color: rgba(220,220,220,1);
    }

    .list-top {
        max-height: 20vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .list-logo {
            height: 3rem;
            width: 3rem;
            border-radius: 10px;
            margin-left: 1em;
            border: 2px solid black;
            flex-shrink: 0;
            background-color: white;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 80%;
        }

        .list-tech {
            min-height: 100%;
            min-width: 24vw;
            width: auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            margin-left: 5%;
            justify-self: flex-start;

            .tech-header {
                font-size: 0.7rem;
                font-family: Montserrat-Bold;
            }

            .tech-subheader {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                font-size: 0.65rem;
                font-family: Montserrat-Bold;
                color: rgba(90,90,90,1);
                padding: 0.2em 0;

                p:nth-child(2) {
                    font-family: Montserrat-SemiBoldItalic;
                    font-size: 0.6rem;
                    padding: 0.1em 0;
                }

                p:nth-child(3) {
                    font-family: Montserrat-SemiBoldItalic;
                    font-size: 0.55rem;
                }
            }
        }
    }

    .list-bottom {
        max-height: 20vh;
        width: 50%;
        display: flex;
        margin-right: 2.5%;

        .list-author {
            min-height: 100%;
            min-width: 25vw;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: center;
            font-size: 0.6rem;
            line-height: 1.4;
            font-family: Montserrat-SemiBold;
            padding-left: 1em;

            p:nth-child(1) {
                font-family: 'Montserrat-SemiBoldItalic';
                font-size: 0.55rem;
            }
        }

        .list-type {
            min-height: 100%;
            min-width: 25vw;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: center;
            font-size: 0.7rem;
            font-family: Montserrat-Bold;

            .list-type-wrapper {
                margin-left: 0.5em;
            }
        }
    }
`;