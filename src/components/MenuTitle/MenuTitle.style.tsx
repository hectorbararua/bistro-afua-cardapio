import styled from "styled-components";

export const StyledMenuTitle = styled.a`
    padding: 3px 12px;
    text-transform: uppercase;
    font-size: 12px;
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-family: 'Open Sans';
    transition: all 0.3s ease;
    border-radius: 15px;
    position: relative;
    display: inline-block;
    margin: 2px 5px 2px 0;
    white-space: nowrap;
    
    &:hover {
        color: white;
    }
    
    &.active {
        color: white;
        font-weight: bold;
        background: linear-gradient(135deg, #3b7ae0 0%, #5d9de5 100%);
        box-shadow: 0 0 8px rgba(59, 122, 224, 0.5);
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        transform: translateY(-1px) scale(1.02);
        letter-spacing: 0.3px;
    }
    
    &.active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 20%;
        width: 60%;
        height: 2px;
        border-radius: 2px;
    }
`