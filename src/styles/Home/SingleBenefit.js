import styled from 'styled-components';

export const StyledBenefit = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1em 3em;
    min-width: 10vw;
    max-width: 15vw;

    span {
        text-align: center;
        margin-top: 1em;
        font-family: Montserrat-Medium;
        font-size: clamp(1rem, 1.5rem, 1.5vw);
        margin: 0;
    }

    .sing-ben-img {
        min-height: 120px;
    }

    .sing-ben-text {
        display: flex;
        flex-flow: column nowrap;
    }
`;