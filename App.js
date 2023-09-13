import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SquareComponent from './component/card';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
    .then((response) => response.json())
    .then((json) => setData(json))
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((pokemon, index) => (
          <SquareComponent data={pokemon} key={index}/>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
