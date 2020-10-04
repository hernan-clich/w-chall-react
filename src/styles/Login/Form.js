import styled from 'styled-components';

//import { plainWhite, outerSpacing } from '../Variables';

export const StyledForm = styled.div`
    min-height: 100vh;
    min-width: 100vh;
    position: relative;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-image: url('./assets/Backgrounds/Bg_Header.png');
        background-size: cover;
    }

    @media (min-width: 616px){
        &::before {
            background-image: url('./assets/Backgrounds/Bg_Header@2x.png');
            background-size: cover;
        }
    }

    @media (min-width: 1232px){
        &::before {
            background-image: url('./assets/Backgrounds/Bg_Header@3x.png');
            background-size: cover;
        }
    }
`;