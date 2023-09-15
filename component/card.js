import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import FlipCard from 'react-native-flip-card';

const SquareComponent = ({data}, {index}) => {
  
  return (
    <FlipCard
            key={index}
            style={styles.card}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}>
      <View style={styles.square} key={index} >
        <View style={styles.align}>
          <Text style={styles.name} >{data.name}</Text>
        </View>
        <Image source={{uri: data.image}} style={{width: 100, height: 100}} />
          {data.apiEvolutions.map((evolution) => <Text style={{color: 'white', marginTop: 6}} >{evolution.name} #{evolution.pokedexId}</Text>)}
          <Text style={{color: 'white', marginTop: 6}} >{data.apiPreEvolution.name} #{data.apiPreEvolution.pokedexId}</Text>
      </View>
      <View style={styles.square} key={index}>
        <Text style={{marginTop: 3}}>Number {data.id}</Text>
        <Text style={styles.name} >{data.name}</Text>
        <Text style={styles.text} >HP: {data.stats.HP}</Text>
        <Text style={styles.text} >Attack: {data.stats.attack}</Text>
        <Text style={styles.text} >Defense: {data.stats.defense}</Text>
        <View style={styles.align}>
            {data.apiTypes.map((type) => (
            <View style={styles.align} >
                <Text style={styles.text} >{type.name}</Text>
                <Image source={{uri: type.image}} style={{width: 10, height: 10}}/>
                <Text>  </Text>
            </View>))
            }
        </View>
      </View>
    </FlipCard>
    );
  };
  

const styles = StyleSheet.create({
    square: {
      width: 300,
      height: 200,
      backgroundColor: 'grey',
      borderRadius: 10,
      margin: 6, 
      alignItems: 'center',
      padding: 5
    },
    text: {
      marginTop: 2,
      fontSize: 20,
      color: 'white'
    },
    name: {
      fontSize: 30,
      color: 'white'
    },
    align: {
        flexDirection: 'row'
    }
  });

export default SquareComponent;