const Calculadora = require('../src/calculator');

class TestRunner {
  constructor() {
    this.passed = 0;
    this.failed = 0;
  }

  describe(nombre, fn) {
    console.log(`\n${nombre}`);
    fn();
  }

  test(descripcion, fn) {
    try {
      fn();
      this.passed++;
      console.log(`  ✓ ${descripcion}`);
    } catch (error) {
      this.failed++;
      console.log(`  ✗ ${descripcion}`);
      console.log(`    Error: ${error.message}`);
    }
  }

  assert(condicion, mensaje) {
    if (!condicion) {
      throw new Error(mensaje);
    }
  }

  assertEqual(actual, esperado, mensaje) {
    if (actual !== esperado) {
      throw new Error(`${mensaje} - Esperado: ${esperado}, Actual: ${actual}`);
    }
  }

  mostrarResultados() {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Total: ${this.passed + this.failed} tests`);
    console.log(`Pasaron: ${this.passed} ✓`);
    console.log(`Fallaron: ${this.failed} ✗`);
    console.log(`${'='.repeat(50)}\n`);

    return this.failed === 0;
  }
}

// Ejecutar tests
function ejecutarTests() {
  const calc = new Calculadora();
  const runner = new TestRunner();

  runner.describe("Pruebas de Validación", () => {
    runner.test("Rechaza valores no numéricos en suma", () => {
      try {
        calc.sumar("abc", 5);
        throw new Error("Debería lanzar un error");
      } catch (e) {
        runner.assert(e.message.includes("números"), "Error de validación");
      }
    });

    runner.test("Rechaza NaN en resta", () => {
      try {
        calc.restar(NaN, 5);
        throw new Error("Debería lanzar un error");
      } catch (e) {
        runner.assert(e.message.includes("válidos"), "Error de validación");
      }
    });
  });

  runner.describe("Pruebas de Suma", () => {
    runner.test("2 + 3 = 5", () => {
      runner.assertEqual(calc.sumar(2, 3), 5, "Suma simple");
    });

    runner.test("0 + 0 = 0", () => {
      runner.assertEqual(calc.sumar(0, 0), 0, "Suma de ceros");
    });

    runner.test("-5 + 3 = -2", () => {
      runner.assertEqual(calc.sumar(-5, 3), -2, "Suma con negativos");
    });
  });

  runner.describe("Pruebas de Resta", () => {
    runner.test("10 - 4 = 6", () => {
      runner.assertEqual(calc.restar(10, 4), 6, "Resta simple");
    });

    runner.test("5 - 5 = 0", () => {
      runner.assertEqual(calc.restar(5, 5), 0, "Resta igual a cero");
    });

    runner.test("-3 - 2 = -5", () => {
      runner.assertEqual(calc.restar(-3, 2), -5, "Resta con negativos");
    });
  });

  runner.describe("Pruebas de Multiplicación", () => {
    runner.test("4 * 5 = 20", () => {
      runner.assertEqual(calc.multiplicar(4, 5), 20, "Multiplicación simple");
    });

    runner.test("0 * 100 = 0", () => {
      runner.assertEqual(calc.multiplicar(0, 100), 0, "Multiplicación por cero");
    });

    runner.test("-3 * 4 = -12", () => {
      runner.assertEqual(calc.multiplicar(-3, 4), -12, "Multiplicación con negativos");
    });
  });

  runner.describe("Pruebas de División", () => {
    runner.test("20 / 4 = 5", () => {
      runner.assertEqual(calc.dividir(20, 4), 5, "División simple");
    });

    runner.test("7 / 2 = 3.5", () => {
      runner.assertEqual(calc.dividir(7, 2), 3.5, "División con decimales");
    });

    runner.test("División entre cero lanza error", () => {
      try {
        calc.dividir(10, 0);
        throw new Error("Debería lanzar un error");
      } catch (e) {
        runner.assert(
          e.message.includes("No se puede dividir entre cero"),
          "Error de división por cero"
        );
      }
    });
  });

  runner.describe("Pruebas de Potencia", () => {
    runner.test("2 ^ 3 = 8", () => {
      runner.assertEqual(calc.potencia(2, 3), 8, "Potencia simple");
    });

    runner.test("5 ^ 0 = 1", () => {
      runner.assertEqual(calc.potencia(5, 0), 1, "Potencia cero");
    });

    runner.test("Rechaza exponentes negativos", () => {
      try {
        calc.potencia(2, -1);
        throw new Error("Debería lanzar un error");
      } catch (e) {
        runner.assert(e.message.includes("positivo"), "Error de validación");
      }
    });
  });

  return runner.mostrarResultados();
}

// Ejecutar si se corre directamente
if (require.main === module) {
  const exito = ejecutarTests();
  process.exit(exito ? 0 : 1);
}

module.exports = { TestRunner, ejecutarTests };
