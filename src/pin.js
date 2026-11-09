export function esPinValido(pin) {
    if (typeof pin !== 'string') return false;
    if (!/^(?:\d{4}|\d{6})$/.test(pin)) return false;

    return new Set(pin).size > 1;
}