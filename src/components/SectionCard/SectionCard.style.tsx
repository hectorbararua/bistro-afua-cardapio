import styled from "styled-components";

export const StyledSectionCard = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 88%;
    margin: auto auto 35px auto; 
    padding-top: 20px;
`

export const StyledBox = styled.div`
    margin-top: 250px;
`

export const StyledSection = styled.div`
`

export const StyledDivImg = styled.div`
    height: 115px;
    width: 140px;
`

export const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`

export const StyledItemType = styled.h2`
    font-size: 18px;
    margin-left: 25px;
    text-transform: uppercase;
    font-family: 'Open Sans';
    padding-top: 48px;
    padding-bottom: 15px;

    &#Entrada {
        padding-top: 5px;
    }
`

export const StyledItemName = styled.h3`
    display: flex;
    font-size: 16px;
    font-weight: 700;
    max-width: 175px;
    margin: 0;
    color: #202020;
`
export const StyledDescription = styled.p`
    color: #666262;
    font-size: 12px;
    overflow: auto;
    max-height: 50px;
    max-width: 175px;
    margin-bottom: 4px;
`

export const StyledPrice = styled.p`
    color: #202020;
    font-size: 11px;
    font-weight: 800;
    margin: 0;
`