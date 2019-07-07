import React from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

const currencyPerDollar = {
  POUND: 0.61,
  USD: 0.77,
}



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      resultValue: 0.0,
      inputValue: "",
    }
  }
  buttonPressed = currency =>{
    if (this.state.inputValue == ""){
      Alert.alert("Enter a value nigga")
    }
    let result = this.state.inputValue * currencyPerDollar[currency]
    this.setState({resultValue:result.toFixed(2)})
  }
  render(){
  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <SafeAreaView style = {styles.container} >
      <View style = {styles.screenView}>

        <View style = {styles.resultContainer}>
            <Text style = {styles.resultValue}>
              {this.state.resultValue}
            </Text>
        </View>

        <View style = {styles.inputContainer}>
          <TextInput
            style = {styles.input}
            selectionColor = '#FFF'
            keyboardType = "numeric"
            placeholder = "Enter value"
            value = {this.state.inputValue}
            onChangeText = {
              inputValue => this.setState({
                inputValue
              })
            }
          />
        </View>
        
        <View style = {styles.converterButtonContainer}>
          <TouchableOpacity onPress = {() => this.buttonPressed("POUND")}>
            <Text>£</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.buttonPressed("USD")}>
            <Text>$US</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  screenView: {
    flex: 1
  },
  resultContainer: {
    height:70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2
  }
});


//Assignment
  //Create a currency converter app
  //Input Value for User to type
  // Result value for converted value
  // Dismiss keyboard on tap
  //Use images for currencies

