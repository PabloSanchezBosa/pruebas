import { describe, expect, it } from "vitest";
import { multi } from './multi';

describe('Función Multiplicación', () => {

    it('multi debe ser una función', () => {
        expect(typeof multi).toBe('function');
    });

    it('multi debe multiplicar correctamente dos números positivos', () => {
        expect(multi(3, 4)).toBe(12);
    });

    it('multi debe multiplicar correctamente dos números negativos', () => {
        expect(multi(-2, -3)).toBe(6);
    });

    it('multi debe multiplicar correctamente un número negativo y otro positivo', () => {
        expect(multi(-2, 5)).toBe(-10);
    });

});
