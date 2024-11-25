// utils/PabloMaxOfThree.test.js
import { describe, it, expect } from 'vitest';
import { PabloMaxOfThree } from './PabloMaxOfThree'; // Asegúrate de que la ruta sea correcta

describe('Pruebas de PabloMaxOfThree', () => {

  // Camino 1: n1 es el mayor
  it('Retorna 5 cuando los números son 5, 3, 1', () => {
    expect(PabloMaxOfThree(5, 3, 1)).toBe(5)
  });

  // Camino 2: n2 es el mayor
  it('Retorna 7 cuando los números son 3, 7, 1', () => {
    expect(PabloMaxOfThree(3, 7, 1)).toBe(7)
  });

  // Camino 3: n3 es el mayor
  it('Retorna 9 cuando los números son 3, 7, 9', () => {
    expect(PabloMaxOfThree(3, 7, 9)).toBe(9)
  });

  // Números negativos
  it('Retorna -1 cuando los números son -1, -2, -3', () => {
    expect(PabloMaxOfThree(-1, -2, -3)).toBe(-1)
  });

  // Números mixtos
  it('Retorna 1 cuando los números son -1, 0, 1', () => {
    expect(PabloMaxOfThree(-1, 0, 1)).toBe(1)
  });
});
