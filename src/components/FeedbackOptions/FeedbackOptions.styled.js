import styled from "styled-components";

export const Container = styled.div`
margin-top: 20px;
`;

export const Button = styled.button`
    align-items: center;
    display: inline-flex;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    justify-content: center;
    letter-spacing: -0.8px;
    min-width: 140px;
    text-transform: capitalize;
    background-color: lightblue;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: bisque;
    }

    &:nth-of-type(even) {
        margin: auto 3rem;
    }
`;
