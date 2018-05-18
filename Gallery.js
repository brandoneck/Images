import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet, AppRegistry, Platform, Animated } from 'react-native';
import { Button, Container } from 'native-base';
import Animacion from './anim';


export default class Gallery extends Component {
  render() {
    return (
      <Container ImageBackground source={{uri:'http://www.misucell.com/data/out/7/IMG_189451.jpg'}} >
      <View style = {styles.container}>
        <View style = {styles.row}>
          <View style={styles.box}>
            <Image
              style={styles.button}
              source={{uri: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e6/Triforce.png/revision/latest/scale-to-width-down/480?cb=20120430211105&path-prefix=en'}}/>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.button}
              source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
          </View>
          <View style={[styles.box]}>
            <Image
              style={styles.button}
              source={{uri: 'https://benonicitytimes.co.za/wp-content/uploads/sites/26/2016/11/rain-03.jpg'}}/>
          </View>
        </View>
        
        <View style = {styles.row}>
          <View style={styles.two}>
            <Image
              style={styles.button}
              source={{uri: 'https://cuerdadeguitarra.com/wp-content/uploads/2014/12/dimebag-darrell-james-hetfield.jpg'}}/>
          </View>
          <View style={styles.two}>
            <Image
              style={styles.button}
              source={{uri: 'https://http2.mlstatic.com/mascara-ichigo-kurosaki-hollow-bleach-wiki-wikia-anime-manga-D_NQ_NP_836905-MCO25977488948_092017-F.webp'}}/>
          </View>
          <View style={[styles.two]}>
            <Image
              style={styles.button}
              source={{uri: 'http://truenometalico.com/wp-content/uploads/2012/05/judaspirest.jpg'}}/>
          </View>
          
        </View>   
       

       
       
      </View>
      <Animacion/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    padding: 10,  
  },
  box: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
  },
  button: {
    
    width: 100,
    height: 100,
   
  },
  two: {
    flex :2,
  },

  three: {
    flex :3,
  },

  container: {
    flex: .7,
    justifyContent: 'space-between',
    
    
  },

})
