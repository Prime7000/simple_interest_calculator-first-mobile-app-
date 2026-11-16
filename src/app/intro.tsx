import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function IntroScreen() {

  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  function cal(p:any,r:any,t:any){
    const I = p * r * t / 100
    Alert.alert(`Interest is = ${I}`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.fieldCard} >
          <Text style={style.label}>Principal</Text>
          <TextInput 
          style={style.input}
          placeholder="Amount loaned to you"
          keyboardType="decimal-pad"
          value={principal}
          onChangeText={setPrincipal}
          ></TextInput>
        </View>

        <View style={style.fieldCard}>
          <Text style={style.label}>Rate</Text>
          <TextInput 
          style={style.input}
          placeholder="Payment rate e.g 10%"
          keyboardType="decimal-pad"
          value={rate}
          onChangeText={setRate}
          ></TextInput>
        </View>

        <View style={style.fieldCard}>
          <Text style={style.label}>Time</Text>
          <TextInput 
          style={style.input}
          placeholder="Total loan repayment period"
          keyboardType="decimal-pad"
          value={time}
          onChangeText={setTime}
          ></TextInput>
        </View>

        <View style={{paddingTop:40}}>
           <Button 
              title="Calculate Interest" 
              onPress={() => cal(principal,rate,time)}
            />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      padding:7

  },

  input:{
    backgroundColor:"#cccccc69",
    borderColor:"#cccccc69",
    borderWidth: 1,
    borderRadius:8,
    padding:12
  },

  label:{
    fontSize: 20,
    fontWeight: "bold"
  },

  fieldCard:{
    paddingTop: 10
  }
})
