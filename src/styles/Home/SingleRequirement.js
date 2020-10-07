import styled from 'styled-components';

export const StyledRequirement = styled.div`
    display: flex;

    p {
        padding: 1em;
        font-size: 15px;
        font-family: Montserrat-Medium;
    }

    @media (min-width: 768px){
        p {
            font-size: 17px;
        }
    }
`;