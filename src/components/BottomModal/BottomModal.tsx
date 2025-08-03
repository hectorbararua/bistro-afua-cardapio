// components/BottomModal.tsx
import { CiShoppingCart } from "react-icons/ci";
import styled from "styled-components";

interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: number;
    img: string;
    description?: string;
  };
  onAdd: () => void;
}

export default function BottomModal({ isOpen, onClose, item, onAdd }: BottomModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{item.name}</Title>
        <Image src={item.img} alt={item.name} />
        {item.description && <Description>{item.description}</Description>}
        <Price>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
        <AddButton onClick={onAdd}>
          <CiShoppingCart size={22} style={{ marginRight: 1 }} />
          Adicionar ao Pedido
        </AddButton>
      </ModalContent>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.15);
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  float: right;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 140px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #1e1e1e;
  margin-bottom: 16px;
`;

const AddButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

