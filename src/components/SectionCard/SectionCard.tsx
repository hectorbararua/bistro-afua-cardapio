import { useState } from "react";
import { FoodCategory, FoodType } from "../../Data/index";
import {
  StyledBox, StyledSection, StyledCard, StyledCardImage, StyledCardName,
  StyledCardPrice, StyledButtonGroup, StyledCardButton,
} from "./SectionCard.style";
import BottomModal from "../BottomModal/BottomModal";
import { CiShoppingCart, CiViewList } from "react-icons/ci";
import { useCart } from "../CartContext/CartContext";

// Supondo que FoodItem tenha name, img, price, etc.
interface FoodItem {
  name: string;
  img: string;
  price: number;
}

interface SectionCardProps {
  list?: Partial<FoodType>;
}

export default function SectionCard({ list = {} }: SectionCardProps) {
  // const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleView = (item: FoodItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const { addToCart } = useCart();

  const handleAdd = () => {
    if (selectedItem) {
      addToCart(selectedItem);
    }
    handleClose();
  };

  return (
    <>
      <StyledBox>
        {Object.keys(list).map((type) => (
          <StyledSection key={type}>
            {list[type as FoodCategory]?.map((item, index) => (
              <StyledCard key={index}>
                <StyledCardImage src={item.img} alt={item.name} />
                <StyledCardName>{item.name}</StyledCardName>
                <StyledCardPrice>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </StyledCardPrice>
                <StyledButtonGroup>
                  <StyledCardButton onClick={() => handleView(item)}>
                    <CiViewList size={18} style={{ marginRight: 4 }} />
                    Ver
                  </StyledCardButton>
                  <StyledCardButton primary onClick={() => addToCart(item)}>
                    <CiShoppingCart size={18} style={{ marginRight: 2 }} />
                    Adicionar
                  </StyledCardButton>
                </StyledButtonGroup>
              </StyledCard>
            ))}
          </StyledSection>
        ))}
      </StyledBox>

     <BottomModal
        isOpen={!!selectedItem}
        onClose={handleClose}
        item={selectedItem}
        onAdd={handleAdd}
      />

    </>
  );
}
