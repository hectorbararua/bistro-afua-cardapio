import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    background-color: #A4031F;
`
export const StyledBox = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
    transform: translate(0%, 0%);
    transition: transform 0.7s;

    &:hover {
        transform: translate(0%, 0%);
    }

    &.scrolled {
        width: 100%;
        transform: translate(0%, -50%);
        transition: transform 0.9s;
    }

    &.scrolled:hover {
        transform: translate(0%, -50%);
    }
`
