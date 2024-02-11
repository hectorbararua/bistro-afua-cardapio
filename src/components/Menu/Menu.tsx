import MenuTitle from "../MenuTitle/MenuTitle";
import { StyledMenu } from "./Menu.style";

export default function Menu() {
    return (
        <StyledMenu >
            <MenuTitle title="Entrada" href="#Entrada" />
            <MenuTitle title="Pratos Executivos" href="#Pratos Executivos" />
            <MenuTitle title="Pratos Família (Serve 3 Pessoas)" href="#Pratos Família (Serve 3 Pessoas)" />
            <MenuTitle title="Massa" href="#Massa" />
            <MenuTitle title="Adicionais" href="#Adicionais" />
            <MenuTitle title="Sucos" href="#Sucos" />
            <MenuTitle title="Lonk Necks" href="#Lonk Necks" />
            <MenuTitle title="Drinks" href="#Drinks" />
            <MenuTitle title="Bebida" href="#Bebida" />
            {/* <MenuTitle title="Hamburguer" href="#Hamburguer" />
            <MenuTitle title="Combos" href="#Combos" />
            <MenuTitle title="Adicionais de Hamburger" href="#Adicionais de Hamburger" /> */}
        </StyledMenu>
    )
} 