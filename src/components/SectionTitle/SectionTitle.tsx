import LogoBistro from "../LogoBistro/LogoBistro";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import { StyledSectionTitle } from "./SectionTitle.style";
import Logo from '../../assets/logo-bistro.png'

export default function SectionTitle() {
    return (
        <StyledSectionTitle>
            <LogoBistro src={Logo} alt='Logo' />
            <Title />
            <SubTitle />
        </StyledSectionTitle>
    )
}


