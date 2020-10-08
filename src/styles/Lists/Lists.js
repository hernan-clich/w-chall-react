import styled from 'styled-components';

export const StyledLists = styled.div`
    min-width: 100vw;
    height: auto;

    h2 {
        text-align: center;
        margin-top: 2em;
    }

    #list-wrapper {
        min-width: 100vw;
        height: auto;
    }

    .list-counter-wrapper {
        min-width: 100vw;
        max-height: 50vh;
        min-height: 30vh;
        background-color: rgba(40,40,40,1);
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-family: 'Montserrat-SemiBoldItalic';
            color: rgba(225,225,225,1);
            padding: 0 1em;
            text-align: center;
        }
    }

    @media (min-width: 1361px){
        .list-counter-wrapper {
            p {
                font-size: 1.75vw;
            }
        }
    }
`;