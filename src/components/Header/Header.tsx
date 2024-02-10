import { StyledHeader, StyledBox } from "./Header.style"
import SectionDelivery from "../SectionDelivery/SectionDelivery"
import SectionSearch from "../SectionSearch/SectionSearch"
import SectionAddress from "../SectionAddress/SectionAddress"
import SectionTitle from "../SectionTitle/SectionTitle"
import Menu from "../Menu/Menu"
import { useEffect, useState } from "react"

interface SectionSearchProps {
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function Header({ change, value }: SectionSearchProps) {
    const [scrolled, SetScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if(scrollTop > 120) {
                SetScrolled(true)
            } else {
                SetScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <StyledBox className={`${scrolled ? 'scrolled' : ''}`}>
            <StyledHeader>
                <SectionTitle />
                <SectionAddress />
                <SectionDelivery />
                <SectionSearch change={change} value={value} />
            </StyledHeader>
            <Menu />
        </StyledBox>
    )
}