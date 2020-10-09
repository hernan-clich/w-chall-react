import styled from 'styled-components';

// import { primary } from './Variables';

export const StyledError404 = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    #error-wrapper {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        margin: 3em 0.5em;
        
        img {
            margin-bottom: 5em;
            width: 75%;
            height: 100%;
        }

        .error-text {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            margin-bottom: 3em;
            text-align: center;

            h1 {
                margin-bottom: 0.75em;
            }
        }
    }
    
    @media (min-width: 1361px){
        #error-wrapper .error-text {

            h1 {
                font-size: 2.5vw;
                margin-top: 3vh;
            }

            h2 {
                font-size: 1.75vw;
                margin-bottom: 3vh;
            }
        }
    }
`;