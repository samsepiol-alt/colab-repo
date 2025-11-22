# Calculadora CLI

Una calculadora simple ejecutable desde la línea de comandos con validaciones y suite de tests incluida.

## Características

- ✅ Operaciones básicas: suma, resta, multiplicación, división
- ✅ Operación de potencia
- ✅ Validación robusta de entrada
- ✅ Manejo de errores
- ✅ Suite de tests completa
- ✅ Interfaz CLI simple y clara

## Requisitos

- Node.js (versión 12 o superior)

## Instalación

1. Clona o descarga el proyecto:
```bash
git clone <repositorio>
cd calculadora-cli
```

2. No hay dependencias externas, está listo para usar.

## Estructura del Proyecto

```
.
├── calculator.js           # Clase Calculadora con lógica
├── app.js                  # Interfaz CLI
├── tests/
│   └── calculator.test.js  # Suite de tests
└── README.md               # Este archivo
```

## Uso

### Línea de Comandos

Ejecuta operaciones proporcionando la operación y dos números:

```bash
node app.js <operacion> <numero1> <numero2>
```

### Ejemplos de Uso

**Suma:**
```bash
node app.js sumar 5 3
# Salida: 5 + 3 = 8
```

**Resta:**
```bash
node app.js restar 10 4
# Salida: 10 - 4 = 6
```

**Multiplicación:**
```bash
node app.js multiplicar 6 7
# Salida: 6 * 7 = 42
```

**División:**
```bash
node app.js dividir 20 4
# Salida: 20 / 4 = 5
```

**Potencia:**
```bash
node app.js potencia 2 8
# Salida: 2 ^ 8 = 256
```

### Manejo de Errores

La calculadora valida la entrada y maneja errores adecuadamente:

```bash
# Error: División entre cero
node app.js dividir 10 0
# ❌ Error: No se puede dividir entre cero

# Error: Argumentos no numéricos
node app.js sumar abc 5
# ❌ Error: Los argumentos deben ser números
```

## Tests

### Ejecutar Tests

```bash
node tests/calculator.test.js
```

### Salida de Tests

```
Pruebas de Validación
  ✓ Rechaza valores no numéricos en suma
  ✓ Rechaza NaN en resta

Pruebas de Suma
  ✓ 2 + 3 = 5
  ✓ 0 + 0 = 0
  ✓ -5 + 3 = -2

Pruebas de Resta
  ✓ 10 - 4 = 6
  ✓ 5 - 5 = 0
  ✓ -3 - 2 = -5

Pruebas de Multiplicación
  ✓ 4 * 5 = 20
  ✓ 0 * 100 = 0
  ✓ -3 * 4 = -12

Pruebas de División
  ✓ 20 / 4 = 5
  ✓ 7 / 2 = 3.5
  ✓ División entre cero lanza error

Pruebas de Potencia
  ✓ 2 ^ 3 = 8
  ✓ 5 ^ 0 = 1
  ✓ Rechaza exponentes negativos

==================================================
Total: 18 tests
Pasaron: 18 ✓
Fallaron: 0 ✗
==================================================
```

## API de la Clase Calculadora

### Métodos Disponibles

#### `sumar(a, b)`
Retorna la suma de dos números.
```javascript
const calc = new Calculadora();
calc.sumar(5, 3); // 8
```

#### `restar(a, b)`
Retorna la resta de dos números.
```javascript
calc.restar(10, 4); // 6
```

#### `multiplicar(a, b)`
Retorna el producto de dos números.
```javascript
calc.multiplicar(6, 7); // 42
```

#### `dividir(a, b)`
Retorna la división de dos números. Lanza error si `b` es 0.
```javascript
calc.dividir(20, 4); // 5
```

#### `potencia(a, b)`
Retorna `a` elevado a la potencia `b`. El exponente debe ser un entero positivo.
```javascript
calc.potencia(2, 8); // 256
```

## Validaciones

La calculadora realiza las siguientes validaciones:

1. **Tipo de datos**: Verifica que los argumentos sean números
2. **Valores válidos**: Rechaza NaN (Not a Number)
3. **División por cero**: Lanza error si se intenta dividir entre 0
4. **Exponentes válidos**: El exponente debe ser un entero positivo

## Ejemplos Avanzados

### Usar la clase en tu propio código

```javascript
const Calculadora = require('./calculator');

const calc = new Calculadora();

try {
  const resultado = calc.sumar(10, 20);
  console.log(`Resultado: ${resultado}`); // 30
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

### Crear tus propios tests

```javascript
const Calculadora = require('./calculator');

const calc = new Calculadora();

console.assert(calc.sumar(2, 2) === 4, 'La suma falló');
console.assert(calc.multiplicar(3, 4) === 12, 'La multiplicación falló');
```

## Posibles Mejoras

- [ ] Agregar más operaciones (raíz cuadrada, módulo, etc.)
- [ ] Interfaz interactiva en lugar de argumentos CLI
- [ ] Soporte para historial de operaciones
- [ ] Integración con frameworks de testing como Jest
- [ ] Archivo de configuración para precisión decimal
- [ ] Documentación API más completa

## Licencia

Este proyecto está disponible bajo la licencia MIT.

## Autor

Calculadora CLI - Proyecto educativo para Node.js

## Contacto y Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, abre un issue primero para discutir qué te gustaría cambiar.