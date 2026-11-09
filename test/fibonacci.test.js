import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci(n)', () => {
    describe('Casos válidos y límites', () => {
        it('devuelve 0 para n = 0', () => {
            expect(fibonacci(0)).toBe(0);
        });

        it('devuelve 1 para n = 1 y n = 2', () => {
            expect(fibonacci(1)).toBe(1);
            expect(fibonacci(2)).toBe(1);
        });

        it('calcula terminos intermedios correctamente (n = 5, n = 10)', () => {
            expect(fibonacci(5)).toBe(5);
            expect(fibonacci(10)).toBe(55);
        });

        it('calcula el limite superior seguro n = 78', () => {
            expect(fibonacci(78)).toBe(8944394323791464);
        });
    });

    describe('Casos invalidos y errores', () => {
        const ERROR_MSG = 'solo números enteros entre 0 y 78';

        it('lanza RangeError en negativos', () => {
            expect(() => fibonacci(-1)).toThrowError(RangeError);
            expect(() => fibonacci(-1)).toThrow(ERROR_MSG);
        });

        it('lanza RangeError para valores mayores a 78', () => {
            expect(() => fibonacci(79)).toThrowError(RangeError);
            expect(() => fibonacci(79)).toThrow(ERROR_MSG);
        });

        it('lanza RangeError en numeros decimales', () => {
            expect(() => fibonacci(2.5)).toThrowError(RangeError);
            expect(() => fibonacci(2.5)).toThrow(ERROR_MSG);
        });

        it('lanza RangeError en NaN e infinitos', () => {
            expect(() => fibonacci(NaN)).toThrowError(RangeError);
            expect(() => fibonacci(NaN)).toThrow(ERROR_MSG);
            expect(() => fibonacci(Infinity)).toThrowError(RangeError);
            expect(() => fibonacci(Infinity)).toThrow(ERROR_MSG);
            expect(() => fibonacci(-Infinity)).toThrowError(RangeError);
            expect(() => fibonacci(-Infinity)).toThrow(ERROR_MSG);
        });

        it('lanza RangeError en tipos no numericos (sin conversion automatica)', () => {
            expect(() => fibonacci('5')).toThrowError(RangeError);
            expect(() => fibonacci('5')).toThrow(ERROR_MSG);
            expect(() => fibonacci(null)).toThrowError(RangeError);
            expect(() => fibonacci(null)).toThrow(ERROR_MSG);
            expect(() => fibonacci(undefined)).toThrowError(RangeError);
            expect(() => fibonacci(undefined)).toThrow(ERROR_MSG);
        });
    });
});