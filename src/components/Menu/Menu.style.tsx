import styled from "styled-components";

export const StyledMenu = styled.div`
    display: flex;
    padding: 0 15px;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    height: 38px;
    width: 100%;
    background-color: rgba(27, 3, 112, 0.98);
    position: relative;
    scroll-behavior: smooth; /* Para garantir que o scroll seja suave */
    
    /* Esconde a barra de rolagem mas mantém a funcionalidade */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE e Edge */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
    
    /* Espaçamento para os elementos do menu */
    > a {
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 26px;
        flex-shrink: 0; /* Impede que os itens sejam comprimidos */
    }
    
    /* Destaque para links ativos */
    > a.active {
        background-color: #3b7ae0;
    }
`