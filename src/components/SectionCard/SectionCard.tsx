import { FoodCategory, FoodType } from "../../Data/index";
import { StyledSectionCard, StyledBox, StyledDivImg, StyledImg, StyledItemName, StyledItemType, StyledDescription, StyledPrice, StyledSection } from "./SectionCard.style";

interface SectionCardProps {
  list?: Partial<FoodType>
}

export default function SectionCard({ list = {} }: SectionCardProps) {
  return (
    <StyledBox>
      {Object.keys(list).map((type) => (
        <StyledSection>
          <StyledItemType id={type}>{type}</StyledItemType>
          {list[type as FoodCategory]?.map((item, index) => (
            <StyledSectionCard key={index}>
              <StyledSection>
                <StyledItemName>{item.name}</StyledItemName>
                <StyledDescription>{item.description}</StyledDescription>
                <StyledPrice>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</StyledPrice>
              </StyledSection>
              <StyledDivImg>
                <StyledImg src={item.img} alt={item.name} />
              </StyledDivImg>
            </StyledSectionCard>
          ))}
        </StyledSection>
      ))}
    </StyledBox>
  );
}