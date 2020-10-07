import styled from 'styled-components';

import { primary } from './Variables';

export const StyledLoader = styled.div`
    border: 12px solid rgba(200, 200, 200, 1);
    border-top: 12px solid ${primary()};
    border-radius: 50%;
    width: 90px;
    height: 90px;
    margin: auto;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { 
            transform: rotate(0deg); 
        }
        100% { 
            transform: rotate(360deg); 
        }
    } 
`;