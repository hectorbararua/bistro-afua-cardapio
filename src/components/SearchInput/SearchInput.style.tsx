import styled from "styled-components";

export const StyledSearchInput = styled.input`
    background-color: transparent; 
    border: none; 
    outline: none;
    width: 90%;
    height: 90%;
    color: #fff;

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    }
`