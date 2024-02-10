import { StyledSearchInput } from "./SearchInput.style";

interface SearchProps {
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

export default function SearchInput({ value, change }: SearchProps) {

    return (
        <StyledSearchInput
            type="search"
            placeholder="Buscar"
            value={value}
            onChange={change}
        />
    )

} 