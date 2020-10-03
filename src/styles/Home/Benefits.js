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

    h2 {
        text-align: center;
        font-size: 2.25vw;
        padding-top: 1em;

        span {
            color: ${primary()};
        }
    }

    #benefits-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 576px){
        #benefits-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 768px){
        #benefits-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 992px){
        #benefits-wrapper {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }
    }

`;