 import React, { Component } from 'react'
 import { Text, View, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'
 import Icon from "react-native-vector-icons/FontAwesome"
 
 export default class Animacion extends Component {

  constructor(props) {
    super(props);
    this.state = {
        spinValue: new Animated.Value(0),
        color: '#F62459',
    }
}

rotateSpring = () => {
    Animated.spring(
        this.state.spinValue,
        {
            toValue: 1,
            friction: 1,
        }
    ).start();
    this.setState({
        color: this.state.color == '#F62469' ? '#FFC107' : '#F62469',
    })
};



   render() {

    var spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
  });

  return (
      <View style={styles.container}>
          <Text style={styles.header}>Clic Aquí</Text>
          <View style={styles.wrapper}>
              <TouchableWithoutFeedback onPress={this.rotateSpring}>
                  <Animated.View style={[styles.circle, {
                      transform: [{rotate: spin},],
                      backgroundColor: this.state.color
                      }]}>
                      <Icon name="ios-add" color="white" size={50}/>
                  </Animated.View>
              </TouchableWithoutFeedback>
          </View>
      </View>
  );
   }
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});