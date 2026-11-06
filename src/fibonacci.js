export function fibonacci(n) {
    // Pendiente de implementar por Desarrollador 2
    if (
        typeof n !== 'number' ||
        Number.isNaN(n) ||
        !Number.isInteger(n) ||
        n < 0 ||
        n > 78
    ) {
        throw new RangeError("solo números enteros entre 0 y 78");
    }

    // Casos base
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Cálculo iterativo para evitar desbordamiento de pila y mantener eficiencia
    let a = 0;
    let b = 1;
    let resultado = 0;

    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }

    return resultado;
}