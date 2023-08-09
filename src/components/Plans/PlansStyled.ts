import { styled } from "styled-components";

export const PlansContainer = styled.div`
    margin-top: 4rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;
`;

export const ProgramsHeader = styled.div`
    display: flex;
    gap: 2rem;
    font-weight: bold;
    font-size: 2rem;
    justify-content: center;
    color: #fff;
    text-transform: uppercase;
    font-style: italic;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PlansCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PlansBlur = styled.div`
    width: 32rem;
    height: 23rem;
    top: 6rem;
    left: 0;
`;

export const PlansBlur2 = styled.div`
    width: 32rem;
    height: 23rem;
    top: 10rem;
    right: 0;
`;