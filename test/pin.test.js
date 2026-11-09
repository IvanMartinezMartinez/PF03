// JavaScript source code
// Funciones de Vitest que usamos para escribir los tests:
// describe = agrupa tests, it = define un test, expect = comprueba un resultado
import { describe, it, expect } from 'vitest';

// Importamos la función que vamos a probar
import { esPinValido } from '../src/pin.js';

// Agrupacion
describe('esPinValido', () => {

    // PIN de 4 o 6 dígitos que no son todos iguales.
    describe('PIN válidos', () => {
        it.each(['0123', '1234', '000001', '123456', '0012', '102030'])(
            'devuelve true para %s',
            (pin) => {
                expect(esPinValido(pin)).toBe(true);
            }
        );
    });

    // Solo se admiten 4 o 6 caracteres: probamos vacío, más cortos y más largos.
    describe('longitud incorrecta', () => {
        it.each(['', '1', '123', '12345', '1234567', '12345678'])(
            'devuelve false para "%s"',
            (pin) => {
                expect(esPinValido(pin)).toBe(false);
            }
        );
    });

    // Tienen longitud válida (4 o 6) pero se rechazan por repetirse el mismo dígito.
    describe('todos los dígitos iguales', () => {
        it.each(['0000', '1111', '9999', '000000', '888888'])(
            'devuelve false para %s',
            (pin) => {
                expect(esPinValido(pin)).toBe(false);
            }
        );
    });

    // La cadena se valida tal como llega: sin recortar espacios ni convertir nada
    describe('caracteres no permitidos', () => {
        it.each([
            '12a4',      // contiene una letra
            ' 1234',     // espacio al principio (no se recorta)
            '1234 ',     // espacio al final
            '12 34',     // espacio en medio
            '12-34',     // separador
            '+123',      // signo
            '12.4',      // punto decimal
            '12\n4',     // salto de línea
            '１２３４',   // dígitos de ancho completo (no son ASCII del 0 al 9)
            '١٢٣٤',      // dígitos arábigo-índicos (tampoco son ASCII)
        ])('devuelve false para %j', (pin) => {
            // %j muestra el valor en formato JSON, para ver bien espacios y saltos de línea
            expect(esPinValido(pin)).toBe(false);
        });
    });

    // Solo vale una cadena. Cualquier otro tipo devuelve false y NO lanza excepción
    describe('tipos incorrectos', () => {
        it.each([
            null,                  // nulo
            undefined,             // sin valor
            1234,                  // número (aunque parezca un PIN)
            123456,                // número de 6 cifras
            true,                  // booleano
            {},                    // objeto
            ['1', '2', '3', '4'],  // array de caracteres
        ])('devuelve false para %j sin lanzar excepción', (pin) => {
            // Comprueba que la función no falla con un error...
            expect(() => esPinValido(pin)).not.toThrow();
            // ...y que además devuelve false
            expect(esPinValido(pin)).toBe(false);
        });
    });
});
