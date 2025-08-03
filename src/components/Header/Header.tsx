import { useEffect, useState } from "react";
import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";
import SectionSearch from "../SectionSearch/SectionSearch";
import SectionTitle from "../SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import { useCart } from "../CartContext/CartContext";
import { generateOrderMessage, OrderInfo } from "../../utils/generateOrderMessage";
import { getWhatsAppLink } from "../../utils/whatsapp";

interface SectionSearchProps {
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Header({ change, value }: SectionSearchProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, increment, decrement, removeFromCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleSendToWhatsApp = () => {
  const orderInfo: OrderInfo = {
    orderNumber: "0032-b2d93ee4",
    menuName: "Cozinha Imperial",
    customerName: "Thiago Lacerda",
    customerPhone: "(96) 9 8131-9121",
    paymentMethod: "Pix",
    deliveryType: "Entrega",
    estimatedTime: "Entre 30 e 60 minutos",
    address:
      "Avenida Acelino de Leão, 912, Trem, Macapá - 68901092 / RESIDENCIAL NONATO - porta de vidro na frente. Só tocar interfone na porta de vidro",
    deliveryFee: 8,
    pixName: "M dos S Cunha Ltda",
    pixKey: "(96)99139 - 5913",
    trackingLink:
      "https://diggy.menu/67474de9376d4abcb2cb6cef/customer?customerId=67cdb50a5d2ab22a3052189b",
  };

  const message = generateOrderMessage(cart, orderInfo);
  const link = getWhatsAppLink(message, orderInfo.customerPhone);
  window.open(link, "_blank");
};


  return (
    <>
      <StyledBox className={scrolled ? "scrolled" : ""}>
        <StyledHeader>
          <HeaderTop>
            <SectionTitle />
            <CartButton onClick={toggleCart}>
              <CiShoppingCart size={22} color="#fff" />
            </CartButton>
          </HeaderTop>

          <Menu />
        </StyledHeader>

        <SectionSearch change={change} value={value} />
      </StyledBox>

      {isCartOpen && (
        <CartBottomModal onClick={toggleCart}>
          <CartContentWrapper onClick={(e) => e.stopPropagation()}>
            <CartHeaderRow>
              <h4>Seu Pedido</h4>
              <CloseIcon onClick={toggleCart}>×</CloseIcon>
            </CartHeaderRow>

            {cart.length === 0 ? (
              <CartEmpty>
                <CartIcon>🛒</CartIcon>
                <p>Seu carrinho está vazio</p>
              </CartEmpty>
            ) : (
              <>
                {cart.map((item) => (
                  <CartItem key={item.name}>
                    <div className="info">{item.name}</div>

                    <QuantityControls className="controls">
                      <button
                        onClick={() => {
                          if ((item.quantity || 1) === 1) {
                            removeFromCart(item.name);
                          } else {
                            decrement(item.name);
                          }
                        }}
                      >
                        -
                      </button>

                      <span>{item.quantity || 1}</span>

                      <button onClick={() => increment(item.name)}>+</button>
                    </QuantityControls>

                    <div  className="price">
                      {(item.price * (item.quantity || 1)).toLocaleString(
                        "pt-BR",
                        {
                          style: "currency",
                          currency: "BRL",
                        }
                      )}
                    </div>
                  </CartItem>
                ))}
              </>
            )}

            <CartFooter>
              <div className="total">
                <span>Total:</span>
                <strong>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
              <WhatsappButton as="button" onClick={handleSendToWhatsApp}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                  alt="WhatsApp"
                />
                Enviar Pedido no WhatsApp
              </WhatsappButton>
            </CartFooter>
          </CartContentWrapper>
        </CartBottomModal>
      )}
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: rgb(6, 4, 168);
`;

const StyledBox = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  transition: transform 0.7s;
  z-index: 999;

  &.scrolled {
    transform: translateY(-50%);
    transition: transform 0.9s;
  }

  &:hover {
    transform: translateY(0%);
  }
`;

const HeaderTop = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

const CartBottomModal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CartContentWrapper = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 10px 10px 0 0;
  padding: 16px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
`;

const CartHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin: 0;
    font-size: 16px;
  }
`;

const CloseIcon = styled.span`
  font-size: 22px;
  cursor: pointer;
`;

const CartEmpty = styled.div`
  text-align: center;
  margin: 32px 0;
  p {
    margin-top: 10px;
    font-size: 14px;
    color: #777;
  }
`;

const CartIcon = styled.div`
  font-size: 36px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 80px; /* Nome | Controles | Preço */
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;

  .name {
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      width: 28px;
      height: 28px;
      font-size: 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    span {
      width: 20px;
      text-align: center;
    }
  }

  .price {
    font-weight: 500;
    font-size: 14px;
    text-align: right;
    white-space: nowrap;
  }
`;




const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  button {
    background-color: #007bff;
    border: none;
    color: white;
    font-weight: bold;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    cursor: pointer;
  }

  span {
    min-width: 24px;
    text-align: center;
  }
`;


const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .total {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    strong {
      color: #007bff;
    }
  }
`;

const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #25d366;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;

  img {
    width: 18px;
    height: 18px;
  }
`;
