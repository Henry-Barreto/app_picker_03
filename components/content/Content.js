import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/ContentStyles';

export default function Content({ name, setName, snack, setSnack, note, setNote }) {
  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#8b8b8b"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Escolha seu lanche:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={snack}
          onValueChange={(itemValue) => setSnack(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Hambúrguer" value="Hambúrguer" />
          <Picker.Item label="Pizza" value="Pizza" />
          <Picker.Item label="Hot Dog" value="Hot Dog" />
          <Picker.Item label="Pastel" value="Pastel" />
        </Picker>
      </View>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Observações (ex: sem cebola)"
        placeholderTextColor="#8b8b8b"
        value={note}
        onChangeText={setNote}
        multiline
        numberOfLines={3}
      />
    </View>
  );
}
