import styled from 'styled-components';

export const StyledRequirements = styled.section`
    min-width: 100vw;
    min-height: 55vh;

    #req-wrapper {
        min-width: 100vw;
        min-height: 55vh;
        display: flex;
        flex-flow: column wrap;

        .req-header {
            min-width: 100vw;
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            font-family: Montserrat-Bold;
            margin: 3em 0.5em;
        }

        .req-bullets-wrapper {
            width: 85vw;
            max-width: 85vw;
            min-height: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: flex-start;
            overflow-wrap: break-word;
            padding: 0;
            margin: 0 auto;
        }
    }

    @media (min-width: 576px){
        #req-wrapper {

            .req-header {
                font-size: 22px;
            }
        }
    }

    @media (min-width: 922px){
        #req-wrapper {
            flex-flow: row wrap;

            .req-header {
                min-width: 40vw;
                width: 40vw;
                min-height: 100%;
                font-size: 28px;
                margin: 0;
            }

            .req-bullets-wrapper {
                min-width: 60vw;
                width: 60vw;
                min-height: 100%;
                padding: 4em 6em 4em 4em;
            }
        }
    }

    @media (min-width: 1361px){
        #req-wrapper {

            .req-header {
                font-size: 2vw;
            }
        }
    }
`;