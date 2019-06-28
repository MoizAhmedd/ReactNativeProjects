import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity,Alert} from 'react-native';



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      uri1: require('./src/dice1.png'),
      uri2: require('./src/dice2.png')
    }
  }
  playButtonPressed = () =>{
    let val1 = this.getRandomValue()
    let val2 = this.getRandomValue()
    if (val1 == 1){
      this.setState({uri1: require('./src/dice1.png')})
    }
    if (val1 == 2){
      this.setState({uri1: require('./src/dice2.png')})
    }
    if (val1 == 3){
      this.setState({uri1: require('./src/dice3.png')})
    }
    if (val1 == 4){
      this.setState({uri1: require('./src/dice4.png')})
    }
    if (val1 == 5){
      this.setState({uri1: require('./src/dice5.png')})
    }
    if (val1 == 6){
      this.setState({uri1: require('./src/dice6.png')})
    }

    if (val2 == 1){
      this.setState({uri2: require('./src/dice1.png')})
    }
    if (val2 == 2){
      this.setState({uri2: require('./src/dice2.png')})
    }
    if (val2 == 3){
      this.setState({uri2: require('./src/dice3.png')})
    }
    if (val2 == 4){
      this.setState({uri2: require('./src/dice4.png')})
    }
    if (val2 == 5){
      this.setState({uri2: require('./src/dice5.png')})
    }
    if (val2 == 6){
      this.setState({uri2: require('./src/dice6.png')})
    }


  }
  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1 
  }

  render(){
  return (
    <View style={styles.container}>

      <View style = {styles.innerContainer}>
      <Image style = {styles.diceOne}
        source = {this.state.uri1}
      />
      <Image style = {styles.diceTwo}
        source = {this.state.uri2}
      />
      </View>
      <TouchableOpacity onPress = {this.playButtonPressed} style = {styles.button}>
        <Text>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  innerContainer:{
    flexDirection: "row"
  },
  diceOne:{
    height: 150,
    width: 150,
  },
  diceTwo:{
    height:150,
    width: 150,
  },
  button:{
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  }
});


//Assignment
  // Create a dice roller app with 2 dices