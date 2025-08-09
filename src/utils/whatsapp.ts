// utils/whatsapp.ts

export function getWhatsAppLink(message: string, phoneNumber: string): string {
  // Remove todos os caracteres não-numéricos do número de telefone
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  
  // Adiciona o código do país se não estiver presente
  const fullPhoneNumber = cleanPhone.startsWith("55") ? cleanPhone : `55${cleanPhone}`;
  
  // URL universal para Web, Android e iOS
  return `https://api.whatsapp.com/send?phone=${fullPhoneNumber}&text=${encodeURIComponent(message)}`;
}
