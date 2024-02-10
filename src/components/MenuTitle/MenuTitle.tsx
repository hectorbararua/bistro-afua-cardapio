import { StyledMenuTitle } from "./MenuTitle.style";

interface MenuTitlePros {
    title: string;
    href: string;
}

export default function MenuTitle({ title, href }: MenuTitlePros) { 
    return (
        <StyledMenuTitle href={href} >
            {title}
        </StyledMenuTitle>
    )
} 