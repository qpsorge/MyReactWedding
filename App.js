import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.star}></View>

      <Text style={styles.title}>
        My Star Wedding
      </Text>

      <View style={styles.GreenBar}></View>

      <Image 
        source={require("./assets/accueil.jpg")}
        style={styles.image}
      />

      <Text style={styles.subtitle}>
        Start to plan your wedding !
      </Text>
      <View style={styles.btnContainer}>
        <Button
          title="HERE"
          color="#FFF"
          onPress={() => Alert.alert("Bienvenue dans l'appli de Rinnie")}
        />
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop:100,
    flex: 1,
    flexDirection : "column",
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  star: {
    height:50,
    width:50,
    backgroundColor:"yellow",
  },

  title: {
    marginTop: 30,
    fontFamily:"Arial",
    fontSize:24,
    fontWeight:"bold"
  },

  GreenBar: {
    marginTop: 30,
    backgroundColor: "#3EC000",
    height:31,
    width:360
  },

  image: {
    height: 240,
    width: 361
  },

  subtitle: {
    marginTop: 60,
    fontFamily:"Arial",
    fontSize:24,
    fontWeight:"bold"
  },

  btnContainer: {
    marginTop: 50,
    height: 50,
    width: 200,
    backgroundColor: "#3EC000",
    justifyContent:'center',
  }

});
