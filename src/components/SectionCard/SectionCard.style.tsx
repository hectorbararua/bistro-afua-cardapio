import styled from "styled-components";

export const StyledSectionCard = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 88%;
    margin: auto auto 35px auto; 
    padding-top: 20px;
`;

export const StyledBox = styled.div`
    margin-top: 100px; /* Posicionado para começar abaixo do input de busca */
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    position: relative; /* Para posicionamento absoluto de elementos filhos */
    z-index: 1; /* Menor que o header/search */
`;

export const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  
  /* Configuração de scroll básica para todas as seções */
  scroll-margin-top: 120px;
`;

export const StyledDivImg = styled.div`
    height: 115px;
    width: 140px;
`;

export const CategoryTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-top: 10px;
  text-align: left;
`;

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px 6px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  width: 100%;
  max-width: 130px; /* controla o tamanho máximo do card */
  height: 192px; /* altura reduzida para compensar espaçamentos menores */
`;

export const StyledCardImage = styled.img`
  height: 70px;
  width: 105px;
  object-fit: cover;
  margin-top: 4px;
  margin-bottom: 4px; /* reduzido pela metade */
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledCardName = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  margin: 3px 0 0;
  height: 30px; /* reduzida levemente para diminuir espaço */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* limita a 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word; /* mantida quebra palavras longas */
  line-height: 1.15; /* reduzido para diminuir altura */
  padding-bottom: 0;
`;

export const StyledCardPrice = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #1e1e1e;
  margin: -8px 0 2px; /* margem superior mais negativa e inferior reduzida pela metade */
  height: 16px;
  padding-top: 0;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-top: -2px; /* adicionado margem negativa para aproximar dos elementos acima */
`;

export const StyledCardButton = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 0;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#e1e1e1')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  /* Remove any default styles that might affect alignment */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#d4d4d4')};
  }
`;
