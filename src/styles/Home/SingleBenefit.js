import styled from 'styled-components';

export const StyledBenefit = styled.div`
    margin: 0 1em 3em;
    min-width: 10vw;
    max-width: 15vw;

    #tech-wrapper {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;

        .sing-ben-img {
            min-height: 120px;
        }

        .sing-ben-text {
            display: flex;
            flex-flow: column nowrap;

            span {
                text-align: center;
                margin-top: 1em;
                font-family: Montserrat-Medium;
                font-size: clamp(1rem, 1.5rem, 1.5vw);
                margin: 0;
            }
        }
    }
    

    @media (min-width: 1361px){
        margin: 0 1em 3em;
        min-width: 10vw;
        max-width: 15vw;

        #tech-wrapper {
            .sing-ben-img {
                min-height: 120px;

                img {
                    width: 7.5vw;
                }
            }

            .sing-ben-text {

                span {
                    margin-top: 0.25em;
                    font-size: 1.75vw;
                }
            }
        }
    }
`;