// utils/whatsapp.ts

export function getWhatsAppLink(message: string, phoneNumber: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
