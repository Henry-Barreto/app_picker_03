import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/FooterStyles';

export default function Footer({ onOrder, submitted, name, snack, note }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={onOrder}>
        <Text style={styles.buttonText}>Fazer Pedido</Text>
      </TouchableOpacity>
      {submitted && (
        <View style={styles.orderBox}>
          <Text style={styles.orderText}>
            Pedido de: <Text style={styles.orderHighlight}>{name || 'Cliente'}</Text>
          </Text>
          <Text style={styles.orderText}>
            Lanche: <Text style={styles.orderHighlight}>{snack}</Text>
          </Text>
          {note.trim().length > 0 && (
            <Text style={styles.orderText}>
              Observação: <Text style={styles.orderHighlight}>{note}</Text>
            </Text>
          )}
        </View>
      )}
    </View>
  );
}
