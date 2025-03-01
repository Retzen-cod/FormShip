// 🚀 Simulación de fórmulas guardadas (esto se reemplazará con almacenamiento real después)
export const getAllFormulas = async () => {
    return [
      {
        id: "1",
        name: "Área del triángulo",
        variables: [
          { name: "base", type: "number", default: 5 },
          { name: "altura", type: "number", default: 10 }
        ],
        expression: "(base * altura) / 2"
      },
      {
        id: "2",
        name: "Interés compuesto",
        variables: [
          { name: "capital", type: "number", default: 1000 },
          { name: "tasa", type: "number", default: 5 },
          { name: "tiempo", type: "number", default: 2 }
        ],
        expression: "capital * (1 + tasa / 100) ^ tiempo"
      }
    ];
  };
  