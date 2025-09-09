# 🚀 Fundamentos de TypeScript

Este proyecto contiene una introducción completa a los conceptos fundamentales de TypeScript, diseñado para familiarizarse con la sintaxis y el tipado estricto de datos.

## 📋 Temas Cubiertos

### Temas Puntuales
Este es un breve listado de los temas fundamentales que veremos en esta sección:

- ✅ **Introducción a TypeScript**
- ✅ **Tipos básicos** - Variables, tipos primitivos y uniones de tipos
- ✅ **Objetos, arreglos e interfaces** - Estructuración de datos complejos
- ✅ **Funciones y sus argumentos** - Tipado de funciones y parámetros
- ✅ **Desestructuración de arreglos y objetos** - Extracción eficiente de datos
- ✅ **Importaciones y exportaciones** - Modularización del código
- ✅ **Clases, constructores** - Programación orientada a objetos
- ✅ **Tipos genéricos** - Reutilización de código con tipos flexibles
- ✅ **Decoradores** - Metadatos y funcionalidad avanzada
- ✅ **Encadenamiento opcional** - Manejo seguro de propiedades

## 🎯 Objetivo

La idea de esta sección no es hacer expertos en TypeScript, sino acostumbrar al desarrollador a la sintaxis y el tipado estricto de datos. Después de completar esta sección, podrás ver TypeScript con otros ojos y enfocarte en todo lo que puede brindarte, en lugar de las barreras que puede ponerte.

## 🛠️ Tecnologías Utilizadas

- **TypeScript** ~5.8.3
- **Vite** ^7.1.2
- **Node.js** (para el entorno de desarrollo)

## 📁 Estructura del Proyecto

```
src/
├── topics/
│   ├── 01-basic-types.ts          # Tipos básicos y variables
│   ├── 02-object-interface.ts     # Objetos e interfaces
│   ├── 03-basic-functions.ts      # Funciones básicas
│   ├── 04-homework-typescript.ts  # Ejercicio práctico
│   ├── 05-basic-destructuring.ts  # Desestructuración básica
│   ├── 06-function-destructuring.ts # Desestructuración en funciones
│   ├── 07-import-export.ts        # Módulos e importaciones
│   ├── 08-classes.ts              # Clases y constructores
│   ├── 09-generic.ts              # Tipos genéricos
│   ├── 10-decorators.ts           # Decoradores
│   └── 11-optional-chaining.ts    # Encadenamiento opcional
├── main.ts                        # Punto de entrada principal
└── style.css                      # Estilos globales
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- pnpm (recomendado) o npm

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd 01_typescript
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abre tu navegador**
   Navega a `http://localhost:5173` para ver la aplicación en funcionamiento.

## 📚 Cómo Usar Este Proyecto

### Ejecutar Ejemplos Individuales
Cada archivo en la carpeta `topics/` contiene ejemplos específicos de conceptos de TypeScript. Puedes:

1. **Ejecutar un tema específico:**
   ```bash
   npx tsx src/topics/01-basic-types.ts
   ```

2. **Compilar TypeScript:**
   ```bash
   pnpm build
   ```

3. **Ver la aplicación compilada:**
   ```bash
   pnpm preview
   ```

### Orden de Estudio Recomendado
1. Comienza con `01-basic-types.ts`
2. Continúa secuencialmente hasta `11-optional-chaining.ts`
3. Completa el ejercicio en `04-homework-typescript.ts`

## 🔧 Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Compila el proyecto para producción
- `pnpm preview` - Previsualiza la versión compilada

## 📖 Conceptos Clave

### Tipado Estricto
TypeScript nos permite definir tipos explícitos para nuestras variables, funciones y objetos, lo que ayuda a detectar errores en tiempo de compilación.

### Interfaces
Las interfaces definen contratos para nuestros objetos, asegurando que cumplan con una estructura específica.

### Tipos Genéricos
Los genéricos nos permiten crear componentes reutilizables que pueden trabajar con diferentes tipos de datos.

## 🤝 Contribuciones

Este es un proyecto educativo. Si encuentras errores o tienes sugerencias para mejorar los ejemplos, ¡las contribuciones son bienvenidas!

## 📝 Notas Importantes

- Las interfaces no ocupan espacio en el código final compilado
- TypeScript se compila a JavaScript estándar
- El tipado estricto ayuda a prevenir errores comunes en tiempo de ejecución
- Los decoradores son una característica experimental que puede requerir configuración adicional

## 🎓 Próximos Pasos

Después de completar este proyecto, estarás preparado para:
- Desarrollar aplicaciones Angular con TypeScript
- Entender el tipado estricto en frameworks modernos
- Aplicar mejores prácticas de desarrollo con TypeScript
- Trabajar con proyectos más complejos que utilicen TypeScript

---

**¡Disfruta aprendiendo TypeScript! 🎉**
