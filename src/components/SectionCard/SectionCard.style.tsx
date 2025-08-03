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
    margin-top: 180px;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    
`

export const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* ou space-between */
  gap: 16px;
  padding: 16px 0;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;

`

export const StyledDivImg = styled.div`
    height: 115px;
    width: 140px;
`


export const StyledCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  width: 100%;
  max-width: 130px; /* controla o tamanho máximo do card */
`;

export const StyledCardImage = styled.img`
  height: 90px;
  object-fit: contain;
  margin-bottom: 12px;
`;

export const StyledCardName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 8px 0;
`;

export const StyledCardPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #1e1e1e;
  margin: 8px 0 16px;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const StyledCardButton = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 5px;
  font-size: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#e1e1e1')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#d4d4d4')};
  }
`;
