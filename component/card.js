import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';



const SquareComponent = ({data}, {index}) => {

    return (
      <View style={styles.square} key={index} >
        <Text style={styles.text} >{data.name}</Text>
        <Image source={{uri: data.image}} style={{width: 100, height: 100}} />
        <Text style={styles.text} >{data.stats.HP} HP</Text>
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
    );
  };
  

const styles = StyleSheet.create({
    square: {
      width: 300,
      backgroundColor: 'grey',
      borderRadius: 10,
      margin: 6, 
      alignItems: 'center',
      padding: 5
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    align: {
        flexDirection: 'row'
    }
  });

export default SquareComponent;