import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SquareComponent from './component/card';
import { useEffect, useState } from 'react';
import { Button, SearchBar } from 'react-native-elements';

export default function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
    .then((response) => response.json())
    .then((json) => {
      setData(json)
      setFilteredData(json)
    })
  },  []);

  function customSort(property) {
    setFilteredData(data.slice().sort((a, b) =>  a[property].toString().localeCompare(b[property].toString())))
  }
  function statSort(property) {
    setFilteredData(data.slice().sort((a, b) => a.stats[property].toString().localeCompare(b.stats[property].toString())))
  }

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
      <View style={styles.align} >
        <Text>Sort: </Text>
        <Button
          onPress={() => customSort("name")}
          title={"Name"}
        />
        <Button
          onPress={() => customSort("id")}
          title={"ID"}
        />
        <Button
          onPress={() => statSort("HP")}
          title={"HP"}
        />
        <Button
          onPress={() => statSort("attack")}
          title={"Attack"}
        />
        <Button
          onPress={() => statSort("defense")}
          title={"Defense"}
        />
      </View>
      <ScrollView>
        {filteredData.map((pokemon) => {
          const name = pokemon.name
          if (search === '' || name.startsWith(search)) {
            return (<SquareComponent data={pokemon} key={pokemon.id}/>)
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
  align: {
      flexDirection: 'row'
  }
});
