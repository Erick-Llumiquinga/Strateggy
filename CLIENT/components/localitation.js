import React, { Component } from 'react';

import { Image } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import {  Text, Body, Button, TouchableOpacityBase, TextInput } from 'native-base';

const url = "http://192.168.100.12:3000/server/ubication"

export default class Localitation extends Component {

  constructor(props){
    
    this.state = {
      empresas: []
    }
  }

  getEmpresa() {

    const header = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
    }
  return fetch('http://localhost:3000/server/procesar',header)
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.empresas);
    })
    .catch((error) => {
      console.error(error);
    });
}
 
  render(){
    return(
      <Image source={require('../img/silla.jpg')} /> 
      <Container>
        <Card>
            <CardItem >
                   <Button transparent textStyle={{ color: '#87838B' }} onPress={this.getEmpresa}>
                      <Text>FEDEX</Text>
                    </Button>

                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Text>C.Ecuador</Text>
                    </Button>

                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Text>Servientrega</Text>
                    </Button>
                    
                  
                </CardItem>
        </ Card>
      </ Container>

    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#367698',
    color: 'white'
  }


});