import '../../../App.css'
import { styled } from "styled-components";

export const PlanCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    gap: 2rem;
    padding: 1.5rem;
    color: #fff;
    background: var(--caloryCard);

    &:nth-child(2) {
        background: var(--planCard);
        transform: scale(1.1);

        @media screen and (max-width: 768px) {
            transform: none;
        }
    }

    &>:nth-child(2) {
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    &>:nth-child(3) {
        font-size: 3rem;
        font-weight: bold;
    }

    &>:nth-child(5) {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: .8rem;
        cursor: pointer;

        span {
            margin-right: 5px;
            transition: .3s ease;
        }

        img {
            width: .8rem;
        }

        &:hover {
            span {
                margin-right: 10px;
            }
        }
    }

    &>img {
        width: 2rem;
        height: 2rem;
    }

    &:nth-child(2)>button {
        color: var(--orange);
    }

    @media screen and (max-width: 768px) {
        width: 17rem;
    }
`;

export const Features = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Feature = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        text-transform: capitalize;
    }

    &>img {
        width: 1rem;
    }
`;