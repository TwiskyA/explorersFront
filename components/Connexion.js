import React, { Component } from "react";
import InputSign from "./InputSign";
import { View, Image, TextInput } from "react-native";
import { Text, Button } from "react-native-elements";

class Connexion extends Component {
  render() {
    const { name, setName, password, setPassword } = this.props;
    return (
      // début du form de connexion
      <View
        style={{
          width: "90%",
          height: 290,
          marginLeft: "5%",
          marginBottom: 20,
          marginRight: 5,
          backgroundColor: "white"
        }}
      >
        {/* <Text style={{ position: "absolute", top: 8, left: 38 }}> */}
        {/* <Text style={{ position: "relative", top: 8, left: 38 }}>
          Your FirstName
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            // marginTop: 30,
            position: "relative",
            top: 11,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={setFirstName}
          value={firstName}
          placeholder="John Doe"
        /> */}
        <InputSign
          label={"Your Name"}
          value={name}
          placeholder={"John Doe"}
          setValue={setName}
        />
        {/* <Text style={{ position: "absolute", top: 78, left: 38 }}> */}
        {/* <Text style={{ margin}}>
          Your Password
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            // marginTop: 38,
            position: "relative",
            top: 30,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setPassword(value)}
          value={password}
          placeholder="********"
        /> */}
        <InputSign
          isPassword
          label={"Your Password"}
          value={password}
          placeholder={"*********"}
          setValue={setPassword}
        />
      </View>
    );
  }
}

export default Connexion;
