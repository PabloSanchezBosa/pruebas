import { describe, expect, it } from "vitest"; 
import { div } from './div'; 

describe('Probar función división', () => {

  // a) 
  it('div debe ser una función', () => {
    expect(typeof div).toBe('function');
  });

  // b) 
  it('div debe devolver un número positivo cuando se dividen dos números positivos', () => {
    const num1 = 6;
    const num2 = 2;
    const resultado = div(num1, num2);
    expect(resultado).toBeGreaterThan(0);
    expect(resultado).toBe(3);
  });

  // c)
  it('div debe devolver un número positivo cuando se dividen dos números negativos', () => {
    const num1 = -6;
    const num2 = -2;
    const resultado = div(num1, num2);
    expect(resultado).toBeGreaterThan(0);
    expect(resultado).toBe(3);
  });

  // d)
  it('div debe devolver un número negativo cuando se divide un número positivo y uno negativo', () => {
    const num1 = 6;
    const num2 = -2;
    const resultado = div(num1, num2);
    expect(resultado).toBeLessThan(0);
    expect(resultado).toBe(-3);
  });

});
