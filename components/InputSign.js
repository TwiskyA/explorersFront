import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Text, Button } from "react-native-elements";

class InputSign extends Component {
  render() {
    return (
      <View>
        <Text style={{ position: "relative", top: 8, left: 38 }}>
          {this.props.label}
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginBottom: 20,
            position: "relative",
            top: 10,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          secureTextEntry={this.props.isPassword}
          onChangeText={this.props.setValue}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

export default InputSign;
