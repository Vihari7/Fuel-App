import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [text, onChangeText] = React.useState("User Name ");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.text1}>WELCOME</Text>
      <Text style={styles.text2}>SLgasApp</Text>
      <Text style={styles.text3}>LogIn Now</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Text style={styles.pw}>Forget password?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>LogIn</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.text4}>Don't have an account</Text>
    <Text style={styles.text4}>Signup</Text>

    <Text style={styles.text5}>OR</Text>
    <TouchableOpacity
        style={styles.button2}
        onPress={onPress}
      >
        <Text>Continue With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button3}
        onPress={onPress}
      >
        <Text>Continue With Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: 'rgb(144,225,164)',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5683d5",
    padding: 10,
    margin: 5,
  },
  text1:{
    fontSize:50,
    textAlign: 'center',
    margin: 0,
    color: 'black',
    fontFamily: 'Georgia'
  },
  text2:{
    fontSize:40,
    textAlign: 'center',
    margin: 0,
    color: 'black',
    fontFamily: 'Georgia'
  },
  text3:{
    fontSize:20,
    textAlign: 'left',
    margin: 0,
    color: 'black',
    fontFamily: 'Georgia'
  },
  text4:{
    fontSize:10,
    textAlign: 'center',
    margin: 0,
    color: 'black',
    fontFamily: 'Arial'
  },
  text5:{
    fontSize:10,
    textAlign: 'center',
    margin: 5,
    color: 'black',
    fontFamily: 'Arial'
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#82a4e1",
    padding: 10,
    margin: 5,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#82a4e1",
    padding: 10,
    margin: 5,
  },
  
});

export default App;