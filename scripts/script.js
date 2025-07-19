function add(a, b) {
    if (typeof a !== Number) { a = parseFloat(a); }
    if (typeof b !== Number) { b = parseFloat(b); }
    return a + b;
}