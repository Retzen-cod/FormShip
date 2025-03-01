import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getAllFormulas } from '../storage/storage';

export default function HomeScreen() {
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    const loadFormulas = async () => {
      const savedFormulas = await getAllFormulas();
      console.log("Fórmulas cargadas:", savedFormulas); // 👀 Ver en consola si se cargan
      setFormulas(savedFormulas);
    };
    loadFormulas();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>📜 Mis Fórmulas</Text>

      {formulas.length === 0 ? (
        <Text style={{ textAlign: 'center', fontSize: 16, color: '#777' }}>⚠️ No hay fórmulas guardadas</Text>
      ) : (
        <FlatList
          data={formulas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#ddd', marginBottom: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>📏 Fórmula: {item.expression}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={{ marginTop: 20, padding: 15, backgroundColor: 'blue', alignItems: 'center' }}
        onPress={() => console.log('Abrir FormulaEditor (aún no implementado)')}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>➕ Nueva Fórmula</Text>
      </TouchableOpacity>
    </View>
  );
}
