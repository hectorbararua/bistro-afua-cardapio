import MenuTitle from "../MenuTitle/MenuTitle";
import { StyledMenu } from "./Menu.style";

export default function Menu() {
    return (
        <StyledMenu >
            <MenuTitle title="Todos" href="#Entrada" />
            <MenuTitle title="Fechaduras Vidro/Vidro" href="#Pratos Executivos" />
            <MenuTitle title="Fechaduras Vidro/Alvenaria" href="#Pratos Família (Serve 3 Pessoas)" />
            <MenuTitle title="Bate-Fecha" href="#Massa" />
            <MenuTitle title="Puxadores" href="#Adicionais" />
            <MenuTitle title="Roldanas" href="#Sucos" />
            <MenuTitle title="Batedores" href="#Lonk Necks" />
            <MenuTitle title="Silicone" href="#Drinks" />
            <MenuTitle title="Outros" href="#Bebida" />
            {/* <MenuTitle title="Hamburguer" href="#Hamburguer" />
            <MenuTitle title="Combos" href="#Combos" />
            <MenuTitle title="Adicionais de Hamburger" href="#Adicionais de Hamburger" /> */}
        </StyledMenu>
    )
} 