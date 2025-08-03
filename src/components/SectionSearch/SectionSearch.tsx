import SearchInput from "../SearchInput/SearchInput";
import { StyledSectionSearch } from "./SectionSearch.style";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function SectionSearch({ change, value }: SearchInputProps) {

    return (
        <StyledSectionSearch>
            <CiSearch size={22} style={{ padding: '15px', color:'#000'  }} />
            <SearchInput change={change} value={value} />
        </StyledSectionSearch>
    )
}