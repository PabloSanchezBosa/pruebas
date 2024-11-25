import { describe, expect, it } from "vitest";
import { isAmountBounded } from './isAmountBounded';

describe('Pruebas de isAmountBounded', () => {
  
  // Caso 1: Valores válidos
  it('1 debe devolver true', () => {
    expect(isAmountBounded(1)).toBe(true)
  });

  it('500 debe devolver true', () => {
    expect(isAmountBounded(500)).toBe(true)
  });

  it('1000 debe devolver true', () => {
    expect(isAmountBounded(1000)).toBe(true)
  });

  // Caso 2: Valores inválidos (fuera de rango)
  it('0 debe devolver false', () => {
    expect(isAmountBounded(0)).toBe(false)
  });

  it('1001 debe devolver false', () => {
    expect(isAmountBounded(1001)).toBe(false)
  });

  // Caso 3: Valores no numéricos
  it('"texto" debe devolver false', () => {
    expect(isAmountBounded("texto")).toBe(false)
  });

  it('null debe devolver false', () => {
    expect(isAmountBounded(null)).toBe(false)
  });

  it('true debe devolver false', () => {
    expect(isAmountBounded(true)).toBe(false)
  });
});
