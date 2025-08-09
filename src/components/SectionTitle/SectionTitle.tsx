import LogoBistro from "../LogoBistro/LogoBistro";
import Title from "../Title/Title";
import { StyledSectionTitle } from "./SectionTitle.style";
import Logo from '../../assets/coquetel-na-taca-de-vinho.png'

export default function SectionTitle() {
    return (
        <StyledSectionTitle>
            <LogoBistro src={Logo} alt='Logo Lacerda Acessórios' />
            <Title />
        </StyledSectionTitle>
    )
}


