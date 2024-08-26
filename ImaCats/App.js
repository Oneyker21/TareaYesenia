import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>fotos de gatos.</Text>
      <ScrollView>
      <Image style={styles.gato} source= {require ('./IMAGENES/1.jpeg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/2.png')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/3.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/4.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/5.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/6.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/7.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/8.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/9.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>

      <Image style={styles.gato} source= {require ('./IMAGENES/10.jpg')}/>
      <Text style={styles.NombreCats}>Peluche.</Text>
      <StatusBar style="auto" />
      </ScrollView>
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
  gato:{
    marginTop:10,
    borderRadius:5,
    width:300,
    height:300,
  },
  tituloText:{
    fontSize:30,
    fontWeight:'bold',
  },
  NombreCats:{
    fontWeight: 'bold',
    textAlign:'center',
    color: '#0000ff',
  }
});
