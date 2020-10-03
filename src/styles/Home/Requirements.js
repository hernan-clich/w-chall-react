import styled from 'styled-components';

export const StyledRequirements = styled.section`
    min-width: 100vw;
    min-height: 55vh;

    #req-wrapper {
        min-width: 100vw;
        min-height: 55vh;
        display: flex;
        flex-flow: row wrap;

        .req-header {
            min-width: 40vw;
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5vw;
            font-family: Montserrat-Bold;
        }

        .req-bullets-wrapper {
            max-width: 60vw;
            min-height: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: flex-start;
            overflow-wrap: break-word;
            padding: 4em 6em 4em 4em;

            /* .req-bullet {
                display: flex;

                p {
                    padding: 1em;
                    font-size: 1.1rem;
                    font-family: Montserrat-Medium;
                }
            } */
        }
    }
`;