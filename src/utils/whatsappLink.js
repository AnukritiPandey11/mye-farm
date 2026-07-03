export const generateWhatsAppLink = (productName = "") => {
  const phoneNumber = "917077769100";

  const message = productName
    ? `Hi Mye Farm! I am interested in ${productName}. Could you please share pricing and availability details?`
    : `Hi Mye Farm! I would like to know more about your products.`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};