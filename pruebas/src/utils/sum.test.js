import { describe, expect, it } from "vitest";
import {sum} from './sum'

describe('Función Suma', () => {

    it('Suma debe ser una función', () => {
        expect(typeof sum).toBe('function');
    });

    it('Suma debe sumar correctamente dos números positivos', () => {
        expect(sum(3,4)).toBe(7);
    });

    it('la suma de -2 y 5 debe dar 3', () => {
        //Llamada a la función que estamos testeando
        const result = sum(-2,5);
        //El resultado que esperamos obtener
        expect(result).toBe(3)
    });

    it('la suma de -2 y 5 debe dar 3', () => {
        expect(sum(-2,5)).toBe(3)
    });

});