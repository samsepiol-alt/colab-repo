// calculator.js
class Calculadora {
  validarNumeros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Los argumentos deben ser números");
    }
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Los argumentos no son números válidos");
    }
  }

  sumar(a, b) {
    this.validarNumeros(a, b);
    return a + b;
  }

  restar(a, b) {
    this.validarNumeros(a, b);
    return a - b;
  }

  multiplicar(a, b) {
    this.validarNumeros(a, b);
    return a * b;
  }

  dividir(a, b) {
    this.validarNumeros(a, b);
    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }
    return a / b;
  }

  potencia(a, b) {
    this.validarNumeros(a, b);
    if (!Number.isInteger(b) || b < 0) {
      throw new Error("El exponente debe ser un número entero positivo");
    }
    return Math.pow(a, b);
  }
}

module.exports = Calculadora;