export function isAmountBounded(amount) {
  // Verificar si el valor es un número y no es NaN
  if (typeof amount !== 'number' || isNaN(amount)) {
    return false;
  }

  // Verificar si está dentro del rango (entre 1 y 1000, inclusive)
  return amount >= 1 && amount <= 1000;
}
