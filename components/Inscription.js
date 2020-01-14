import React, { Component } from "react";
import InputSign from "./InputSign";
import { View, Image, TextInput } from "react-native";
import { Text, Button } from "react-native-elements";
import SwitchToggle from "react-native-switch-toggle";

class Inscription extends Component {
  render() {
    const {
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      isTeacher,
      toggleIsTeacher
    } = this.props;
    return (
      // gestion de la vue globale
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
        {/* début du form d'inscription */}
        {/* <Text style={{ position: "absolute", top: 8, left: 38 }}>
          Your FirstName
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: 30,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setFirstName(value)}
          value={firstName}
          placeholder="John Doe"
        /> */}
        <InputSign
          label={"Your Name"}
          value={name}
          placeholder={"John Doe"}
          setValue={setName}
        />
        {/* <Text style={{ position: "absolute", top: 78, left: 38 }}>
          Your Email
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: 38,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setEmail(value)}
          value={email}
          placeholder="john@gmail.com"
        /> */}
        <InputSign
          label={"Your Email"}
          value={email}
          placeholder={"johnny@gmail.com"}
          setValue={setEmail}
        />
        {/* <Text style={{ position: "absolute", top: 148, left: 38 }}>
          Your Password
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: "14%",
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
        <Text style={{ position: "absolute", top: 218, left: 40 }}>
          Teacher
        </Text>
        <SwitchToggle
          containerStyle={{
            marginTop: 40,
            marginLeft: 40,
            width: 60,
            height: 30,
            borderRadius: 25,
            backgroundColor: "white",
            padding: 5
          }}
          circleStyle={{
            width: 30,
            height: 30,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "white"
          }}
          switchOn={isTeacher}
          onPress={toggleIsTeacher}
          circleColorOff="white"
          circleColorOn="#C1EA69"
          duration={500}
        />
      </View>
    );
  }
}

export default Inscription;
