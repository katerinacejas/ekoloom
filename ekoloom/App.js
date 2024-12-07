import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.general}>
      <View style={styles.primeraView}>
        <Text style={styles.textoGeneral}>Probando una primera view color violeta y con estilos</Text>
      </View>
      <View style={styles.segundaView}>
        <Text style={styles.textoGeneral}>Probando una segunda view color turquesa</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  primeraView: {
    flex: 1,
    backgroundColor: '#8A33FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    alignSelf: 'stretch'
  },
  segundaView: {
    flex: 1,
    backgroundColor: '#33FFD1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    alignSelf: 'stretch'
  },
  textoGeneral: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
