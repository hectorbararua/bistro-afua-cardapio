import { StyledMenuTitle } from "./MenuTitle.style";
import React, { useEffect, useRef } from "react";

interface MenuTitlePros {
    title: string;
    href: string;
    active?: boolean;
}

export default function MenuTitle({ title, href, active = false }: MenuTitlePros) { 
    const linkRef = useRef<HTMLAnchorElement>(null);
    
    // Quando o item se torna ativo, faça scroll para ele na navegação horizontal
    useEffect(() => {
        if (active && linkRef.current) {
            // Scroll o menu horizontal para mostrar o item ativo
            const menuElement = linkRef.current.parentElement;
            if (menuElement) {
                const itemLeft = linkRef.current.offsetLeft;
                const menuWidth = menuElement.clientWidth;
                const scrollPosition = itemLeft - menuWidth / 2 + linkRef.current.clientWidth / 2;
                
                menuElement.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [active]);
    
    // Manipulador de clique para atualizar imediatamente a categoria ativa
    const handleClick = (e: React.MouseEvent) => {
        // Extrair o ID do href (removendo o #)
        const targetId = href.substring(1);
        
        // Vamos evitar o comportamento padrão e fazer nosso próprio scroll
        e.preventDefault();
        
        // Encontrar o elemento DOM correspondente
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Primeiro, vamos atualizar a categoria ativa para que o menu se atualize
            window.dispatchEvent(new CustomEvent('forceUpdateCategory', { 
                detail: { categoryId: targetId }
            }));
            
            // Aguardar um tick para garantir que os eventos do DOM foram processados
            setTimeout(() => {
                // Cálculo mais preciso da posição de scroll
                const headerHeight = 90; // Ajuste conforme necessário para o tamanho do header
                
                // Usar offsetTop para obter a posição absoluta do elemento
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Fazer o scroll suave até a seção
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }, 10);
        }
    };
    
    return (
        <StyledMenuTitle 
            ref={linkRef}
            href={href} 
            className={active ? 'active' : ''}
            data-active={active ? 'true' : 'false'}
            onClick={handleClick}
        >
            {title}
        </StyledMenuTitle>
    )
} 