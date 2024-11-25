import { describe, expect, it } from "vitest"; 
import { pablo } from './pablo'; 

describe('Pruebas de la función pablo', () => {

  // a) 
  it('pablo debe ser una función', () => {
    expect(typeof pablo).toBe('function');//comprobación de que es una función
  });

  // b) 
  it('pablo debe devolver true si recibe un número positivo', () => {
    const resultado = pablo(5); //un número positivo
    expect(resultado).toBe(true);
  });

  // c) 
  it('pablo debe devolver false si recibe un número negativo', () => {
    const resultado = pablo(-3); //un número negativo
    expect(resultado).toBe(false);
  });

  // d)
  it('pablo debe devolver null si recibe un 0', () => {
    const resultado = pablo(0); // Usamos 0
    expect(resultado).toBe(null);
  });

});
