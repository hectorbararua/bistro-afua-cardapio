import MenuTitle from "../MenuTitle/MenuTitle";
import { StyledMenu } from "./Menu.style";
import { useEffect } from "react";

interface MenuProps {
    activeCategory: string;
}

export default function Menu({ activeCategory }: MenuProps) {
    // Log para debug quando a categoria ativa mudar
    useEffect(() => {
        console.log('Menu recebeu activeCategory:', activeCategory);
    }, [activeCategory]);

    return (
        <StyledMenu>
            <MenuTitle title="Todos" href="#Entrada" active={activeCategory === 'Entrada'} />
            <MenuTitle title="Fechaduras Vidro/Vidro" href="#Fechaduras Vidro/Vidro" active={activeCategory === 'Fechaduras Vidro/Vidro'} />
            <MenuTitle title="Fechaduras Vidro/Alvenaria" href="#Fechaduras Vidro/Alvenaria" active={activeCategory === 'Fechaduras Vidro/Alvenaria'} />
            <MenuTitle title="Bate-Fecha" href="#Bate-Fecha" active={activeCategory === 'Bate-Fecha'} />
            <MenuTitle title="Puxadores" href="#Puxadores" active={activeCategory === 'Puxadores'} />
            <MenuTitle title="Roldanas" href="#Roldanas" active={activeCategory === 'Roldanas'} />
            <MenuTitle title="Batedores" href="#Batedores" active={activeCategory === 'Batedores'} />
            <MenuTitle title="Silicone" href="#Silicone" active={activeCategory === 'Silicone'} />
            <MenuTitle title="Outros" href="#Outros" active={activeCategory === 'Outros'} />
        </StyledMenu>
    )
} 