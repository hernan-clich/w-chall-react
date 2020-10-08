import styled from 'styled-components';

import { primary, plainWhite } from '../Variables';

export const StyledBenefits = styled.section`
    min-width: 100vw;
    min-height: 80vh;
    background-color: ${plainWhite()};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        height: 2px;
        width: 85%;
        background-color: rgba(238, 241, 246, 1);
        bottom: 0;
        left: 7.5%;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    }

    h2 {
        text-align: center;
        font-size: 22px;
        padding-top: 1em;
        margin: 3.5em 0.5em;

        span {
            color: ${primary()};
        }
    }

    #benefits-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0.9em;  
    }

    @media (min-width: 576px){
        #benefits-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 768px){
        
        h2 {
            font-size: 30px;
        }
        
        #benefits-wrapper {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 992px){
        #benefits-wrapper {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media (min-width: 1361px){
        
        h2 {
            font-size: 3vw;
        }

        #benefits-wrapper {
            margin-bottom: 5vh;
        }
    }
`;