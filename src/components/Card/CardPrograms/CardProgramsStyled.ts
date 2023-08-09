import { styled } from "styled-components";

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    background: gray;
    padding: 2rem;
    gap: 1rem;
    color: #fff;
    justify-content: space-between;
    cursor: pointer;

    &>:nth-child(1) {
        width: 2rem;
        height: 2rem;
        fill: #fff;
    }

    &>:nth-child(2) {
        font-size: 1rem;
        font-weight: bold;
    }

    &>:nth-child(3) {
        font-size: .9rem;
        line-height: 25px;
    }

    &:hover {
        background: var(--planCard);
    }
`;
export const Img = styled.img`
    width:16px;
    height:15px;
    color: #fff;
    fill: #fff;
`;

export const JoinNow = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        width: 1rem;
    }
`;