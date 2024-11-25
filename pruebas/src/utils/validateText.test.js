import { describe, expect, it } from "vitest";
import { validateText } from './validateText';

describe('Pruebas de validateText', () => {
  
  it('Debe devolver true para cadenas alfabéticas de 6 caracteres', () => {
    const result = validateText('abcdef');
    expect(result).toBe(true)
  });

  it('Debe devolver false para cadenas con menos de 6 caracteres', () => {
    const result = validateText('abc');
    expect(result).toBe(false)
  });

});