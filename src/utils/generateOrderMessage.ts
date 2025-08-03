// utils/generateOrderMessage.ts
// types.ts (ou pode colocar junto do componente se preferir)
export interface FoodItem {
  name: string;
  price: number;
  quantity?: number;
  complements?: { name: string; quantity: number; price: number }[];
}

export interface OrderInfo {
  orderNumber: string;
  menuName: string;
  customerName: string;
  customerPhone: string;
  paymentMethod: string;
  deliveryType: string;
  estimatedTime: string;
  address: string;
  deliveryFee: number;
  pixName: string;
  pixKey: string;
  trackingLink: string;
}


export function generateOrderMessage(cart: FoodItem[], info: OrderInfo) {
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const cartLines = cart.map((item) => {
    const line = `👉 ${item.quantity}x ${item.name} ${formatCurrency(item.price)}`;
    const complementLines = item.complements?.length
      ? `\n\tcomplementos do item: \n${item.complements
          .map(
            (c) =>
              `\t- ${c.quantity}x ${c.name} ${formatCurrency(c.price)}`
          )
          .join("\n")}`
      : "";
    return `${line}${complementLines}`;
  });

  const subtotal =
    cart.reduce(
      (acc, item) =>
        acc +
        (item.price * (item.quantity || 1)) +
        (item.complements?.reduce(
          (cacc, c) => cacc + c.price * c.quantity,
          0
        ) || 0),
      0
    );

  const total = subtotal + info.deliveryFee;

  return `
NÚMERO DO PEDIDO: ${info.orderNumber}                  
Nome Cardápio: ${info.menuName}      
Nome do cliente: ${info.customerName}      
Número do telefone: ${info.customerPhone}      
Forma de pagamento: ${info.paymentMethod}                             
Tipo de entrega: ${info.deliveryType}             
Tempo estimado de entrega: ${info.estimatedTime}       
Endereço para entrega: ${info.address}        

RESUMO DO PEDIDO:          
${cartLines.join("\n\n")}
            
Taxa de entrega: ${formatCurrency(info.deliveryFee)}            
TOTAL: ${formatCurrency(total)}      

Nome da chave Pix: 
👉 ${info.pixName}    

Chave Pix: 
👉 ${info.pixKey}          

Acompanhe seu pedido através do link abaixo:      
${info.trackingLink}
  `.trim();
}
