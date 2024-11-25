import { describe, it, expect } from 'vitest';
import { isApproved } from './isApproved';

describe('Pruebas de isApproved', () => {
  
  // Camino 1: Nota fuera de rango (< 0)
  it('Retorna null cuando la nota es -1', () => {
    expect(isApproved(-1)).toBe(null);
  });

  // Camino 2: Nota fuera de rango (> 10)
  it('Retorna null cuando la nota es 11', () => {
    expect(isApproved(11)).toBe(null);
  });

  // Camino 3: Nota dentro del rango pero suspendido (< 5)
  it('Retorna false cuando la nota es 3', () => {
    expect(isApproved(3)).toBe(false);
  });

  // Camino 4: Nota dentro del rango aprobada (>= 5)
  it('Retorna true cuando la nota es 7', () => {
    expect(isApproved(7)).toBe(true);
  });

  // Prueba de valor límite inferior aceptado (0)
  it('Retorna false cuando la nota es 0', () => {
    expect(isApproved(0)).toBe(false);
  });

  // Prueba de valor límite superior aceptado (10)
  it('Retorna true cuando la nota es 10', () => {
    expect(isApproved(10)).toBe(true);
  });

});
