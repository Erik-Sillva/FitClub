import { styled } from "styled-components";

export const ReasonsContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftR = styled.div`
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    grid-auto-rows: 1fr;

    &>img {
        object-fit: cover;
    }

    &>:nth-child(1) {
        width: 12rem;
        height: 28rem;
        grid-row: 1/3;

        @media screen and (max-width: 768px) {
            width: 7rem;
            height: 17rem;
        }
    }

    &>:nth-child(2) {
        width: auto;
        height: 16rem;
        grid-column: 2/4;

        @media screen and (max-width: 768px) {
            width: 15rem;
            height: 10rem;
        }
    }

    &>:nth-child(3) {
        width: 14rem;
        grid-column: 2/3;
        grid-row: 2;

        @media screen and (max-width: 768px) {
            width: 8rem;
            height: 6rem;
        }
    }

    &>:nth-child(4) {
        width: 10rem;
        height: 11.2rem;
        grid-row: 2;
        grid-column: 3/4;

        @media screen and (max-width: 768px) {
            width: 7rem;
            height: 6rem;
        }
    }

    @media screen and (max-width: 768px) {
        grid-auto-rows: auto;
        overflow: hidden;
    }
`;

export const RightR = styled.div`
    flex: 1 1;
    text-transform: uppercase;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    &>span {
        font-weight: bold;
        color: var(--orange);
    }

    &>div {
        color: #fff;
        font-size: 3rem;
        font-weight: bold;
    }

    &>:nth-child(4) {
        color: var(--gray);
        font-weight: normal;
    }
`;

export const DetailsR = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &>div {
        display: flex;
        font-size: 1rem;
        gap: 1rem;

        &>img {
            width: 2rem;
            height: 2rem;
        }
    }
`;

export const Partners = styled.div`
    display: flex;
    gap: 1rem;

    &>img {
        width: 2.5rem;
    }
`;