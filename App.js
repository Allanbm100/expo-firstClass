import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        /* numberOfLines={1}  /*numberOfLines limita as linhas */
        /* ellipsizeMode='head'  /*ellipsizeMode coloca reticências onde pedirmos */
        selectable /* Permite ao usuário copiar o texto em questão */
      >Open up App.js to start working on your app!</Text>
      <TextInput placeholder='Text' style={{ borderWidth: 1, width: "80%" }} /> {/* Aqui é um inline style */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
