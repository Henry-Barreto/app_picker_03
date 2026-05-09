import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import appStyles from './styles/AppStyles';

export default function App() {
  const [name, setName] = useState('');
  const [snack, setSnack] = useState('Hambúrguer');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOrder = () => {
    setSubmitted(true);
  };

  return (
    <View style={appStyles.screen}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={appStyles.screenContainer}>
        <View style={appStyles.card}>
          <Header />
          <Content
            name={name}
            setName={setName}
            snack={snack}
            setSnack={setSnack}
            note={note}
            setNote={setNote}
          />
          <Footer
            onOrder={handleOrder}
            submitted={submitted}
            name={name}
            snack={snack}
            note={note}
          />
        </View>
      </ScrollView>
    </View>
  );
}

