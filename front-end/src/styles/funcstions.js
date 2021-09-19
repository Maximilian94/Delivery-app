const colorByOrderStatus = (status) => {
  if (!status) return;
  if (status === 'Pendente') return '#EACE69';
  if (status === 'Preparando') return '#65B0F6';
  if (status === 'Em Trânsito') return '#9290FE';
  if (status === 'Entregue') return '#50D1AA';
};

export default {
  colorByOrderStatus,
};
