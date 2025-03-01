import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { saveFormula } from '../storage/storage';
import { useNavigation } from '@react-navigation/native';

export default function FormulaEditor() {
  const [name, setName] = useState('');
  const [expression, setExpression] = useState('');
  const navigation = useNavigation();

  const handleSaveFormula = async () => {
    if (!name.trim() || !expression.trim()) {
      Alert.alert('⚠️ Error', 'Debes ingresar un nombre y una fórmula válida.');
      return;
    }

    const formula = {
      id: Date.now().toString(),
      name,
      variables: [], // Luego agregaremos la opción de definir variables.
      expression
    };

    const success = await saveFormula(formula);
    if (success) {
      Alert.alert('✅ Guardado', 'Fórmula guardada correctamente');
      navigation.goBack(); // Volver a HomeScreen.js
    } else {
      Alert.alert('❌ Error', 'No se pudo guardar la fórmula.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>✍️ Crear Nueva Fórmula</Text>

      <Text style={{ marginTop: 20 }}>Nombre de la fórmula:</Text>
      <TextInput 
        value={name} 
        onChangeText={setName} 
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} 
      />

      <Text>Expresión matemática:</Text>
      <TextInput 
        value={expression} 
        onChangeText={setExpression} 
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} 
      />

      <Button title="💾 Guardar Fórmula" onPress={handleSaveFormula} />
    </View>
  );
}
