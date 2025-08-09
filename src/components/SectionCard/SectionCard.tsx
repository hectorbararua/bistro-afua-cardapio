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
          <StyledSection 
            key={type} 
            id={type}
            data-category={type}
            className="category-section"
          >
            <div className="category-title">{type}</div>
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
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'
                    }}>
                      <CiViewList style={{ verticalAlign: 'middle' }} size={12} />
                      <span style={{ 
                        marginLeft: 4, 
                        display: 'inline-block',
                        fontSize: '10px',
                        verticalAlign: 'middle',
                        lineHeight: 1
                      }}>Ver</span>
                    </div>
                  </StyledCardButton>
                  <StyledCardButton primary onClick={() => addToCart(item)}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'
                    }}>
                      <CiShoppingCart style={{ verticalAlign: 'middle' }} size={12} />
                      <span style={{ 
                        marginLeft: 4, 
                        display: 'inline-block',
                        fontSize: '10px',
                        verticalAlign: 'middle',
                        lineHeight: 1
                      }}>Adicionar</span>
                    </div>
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
