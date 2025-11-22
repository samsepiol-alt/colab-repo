// app.js
const Calculadora = require('./calculator');

class CalculadoraCLI {
  constructor() {
    this.calc = new Calculadora();
  }

  mostrarMenu() {
    console.log("\n╔════════════════════════════════════╗");
    console.log("║      CALCULADORA CLI v1.0           ║");
    console.log("╠════════════════════════════════════╣");
    console.log("║  1. Sumar                           ║");
    console.log("║  2. Restar                          ║");
    console.log("║  3. Multiplicar                     ║");
    console.log("║  4. Dividir                         ║");
    console.log("║  5. Potencia                        ║");
    console.log("║  0. Salir                           ║");
    console.log("╚════════════════════════════════════╝");
  }

  procesarComando(args) {
    const comando = args[2];
    const a = parseFloat(args[3]);
    const b = parseFloat(args[4]);

    if (!comando || isNaN(a) || isNaN(b)) {
      console.log("\nUso: node app.js <operacion> <numero1> <numero2>");
      console.log("Operaciones: sumar, restar, multiplicar, dividir, potencia\n");
      return;
    }

    try {
      let resultado;
      switch (comando.toLowerCase()) {
        case 'sumar':
          resultado = this.calc.sumar(a, b);
          console.log(`\n${a} + ${b} = ${resultado}\n`);
          break;
        case 'restar':
          resultado = this.calc.restar(a, b);
          console.log(`\n${a} - ${b} = ${resultado}\n`);
          break;
        case 'multiplicar':
          resultado = this.calc.multiplicar(a, b);
          console.log(`\n${a} * ${b} = ${resultado}\n`);
          break;
        case 'dividir':
          resultado = this.calc.dividir(a, b);
          console.log(`\n${a} / ${b} = ${resultado}\n`);
          break;
        case 'potencia':
          resultado = this.calc.potencia(a, b);
          console.log(`\n${a} ^ ${b} = ${resultado}\n`);
          break;
        default:
          console.log(`\nOperación desconocida: ${comando}`);
          console.log("Operaciones válidas: sumar, restar, multiplicar, dividir, potencia\n");
      }
    } catch (error) {
      console.log(`\n❌ Error: ${error.message}\n`);
    }
  }
}

// Ejecutar CLI si se proporciona argumentos
if (process.argv.length > 2) {
  const cli = new CalculadoraCLI();
  cli.procesarComando(process.argv);
} else {
  console.log("Por favor proporciona una operación y dos números");
  console.log("Ejemplo: node app.js sumar 5 3");
}

module.exports = CalculadoraCLI;