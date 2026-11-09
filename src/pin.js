export function esPinValido(pin) {
    if (typeof pin !== 'string') {
        return false;
    }

    const esLongitudValida = pin.length === 4 || pin.length === 6;
    const soloDigitos = /^\d+$/.test(pin);

    if (!esLongitudValida || !soloDigitos) {
        return false;
    }

    const todosIguales = pin.split('').every(caracter => caracter === pin[0]);
    if (todosIguales) {
        return false;
    }

    return true;
}