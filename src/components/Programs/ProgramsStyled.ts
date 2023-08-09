import { styled } from "styled-components";

export const ProgramsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
`;

export const ProgramsHeader = styled.div`
    display: flex;
    gap: 5rem;
    font-weight: bold;
    font-size: 2rem;
    justify-content: center;
    color: #fff;
    text-transform: uppercase;
    font-style: italic;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        font-size: x-large;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }
`;

export const ProgramsCategories = styled.div`
    display: flex;
    gap: 1rem;

    
`;

export const Category = styled.div`
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;