export const formatDate = (dateBD) => {
  if (!dateBD) return 'no data';
  const data = (dateBD.split('T'))[0].split('-');
  return data.reverse().join('/');
};

export const formatPrice = (price) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(price);
