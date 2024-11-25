import { describe, expect, it } from "vitest";
import { fibonacci } from './fiboPABLO.js'; 

describe('fibonacci function', () => {
    it('debería devolver el valor correcto de Fibonacci para la posición 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('debería devolver el valor correcto de Fibonacci para la posición 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('debería devolver el valor correcto de Fibonacci para la posición 6', () => {
        expect(fibonacci(6)).toBe(8);
    });

    it('debería devolver el valor correcto de Fibonacci para la posición 10', () => {
        expect(fibonacci(10)).toBe(55);
    });
});