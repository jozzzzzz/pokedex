import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SquareComponent from './component/card';
import { useEffect, useState } from 'react';
import { SearchBar } from 'react-native-elements';

export default function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
    .then((response) => response.json())
    .then((json) => setData(json))
  });

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search a pokemon..."
        onChangeText={(text) => (setSearch(text))}
        value={search}
        platform="android" 
        cancelButtonTitle="Cancel"
        style={{marginTop: 10}}
      />
      <ScrollView>
        {data.map((pokemon, index) => {
          const name = pokemon.name
          if (search === '' || name.startsWith(search)) {
            return (<SquareComponent data={pokemon} key={index}/>)
          }
        })}
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
