# 📜 FormShip 🚀

**FormShip** es una app offline que permite crear, editar y compartir fórmulas matemáticas sin necesidad de programar. Define variables, utiliza resultados de pasos anteriores, genera formularios automáticamente y obtén resultados paso a paso. Todo sin tocar código. 💡

## ✨ **Características principales**

- 📂 **Creación y almacenamiento local** de fórmulas en archivos `.formship`.
- 📄 **Generación automática de formularios** basada en variables definidas.
- 🔢 **Soporte para variables con valores libres o predefinidos**.
- ⌨️ **Teclado personalizado para facilitar la escritura de expresiones**.
- 📥 **Importar y 📤 exportar fórmulas** en formato JSON propietario.
- 🔗 **Compartir fórmulas de manera individual o en paquetes**.
- 📏 **Evaluación de cálculos paso a paso** con `FormulaParser.js`.
- 🚀 **100% offline**, sin necesidad de conexión a internet.

## 📂 **Estructura del Proyecto**

```
FormShip/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── screens/          # Pantallas principales
│   │   ├── HomeScreen.js      # Pantalla principal
│   │   ├── FormulaEditor.js   # Editor de fórmulas
│   │   ├── FormScreen.js      # Formulario generado
│   │   ├── SavedFormulas.js   # Lista de fórmulas guardadas
│   ├── storage/          # Almacenamiento local de fórmulas
│   ├── utils/            # Utilidades como `FormulaParser.js`
│
├── App.js                # Punto de entrada de la app
├── package.json          # Dependencias y configuración
└── README.md             # Documentación del proyecto
```

## 🚀 **Instalación y Ejecución**

1. Clonar el repositorio:

```sh
 git clone https://github.com/tu-usuario/FormShip.git
 cd FormShip
```

2. Instalar dependencias:

```sh
 npm install
```

3. Ejecutar en Expo:

```sh
 expo start
```

📌 Para probar en tu celular, usa la app **Expo Go**.

## 📜 **Uso**

1. **Crear una nueva fórmula** desde `FormulaEditor.js`.
2. **Definir variables** con valores libres o predefinidos.
3. **Guardar la fórmula** en el almacenamiento local.
4. **Rellenar el formulario generado** con los valores de las variables.
5. **Obtener el resultado del cálculo** basado en la expresión matemática.
6. **Exportar o compartir** la fórmula en formato `.formship` o JSON.

## 📅 **Próximos pasos**

- 🏗 **Mejorar la UI con temas y modo oscuro.**
- 🔄 **Optimizar la importación/exportación de archivos.**
- 📊 **Agregar historial de cálculos y edición avanzada.**

## 📜 **Licencia**

Este proyecto está bajo la licencia Creative Commons. Puedes usarlo, modificarlo y compartirlo libremente, siempre dando crédito a los creadores originales. 😎

