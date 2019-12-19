import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Image } from "react-native";
import { withNavigation } from "react-navigation";

class Header extends Component {
  // renvoie vers Compte
  onPress = () => {
    this.props.navigation.navigate("Compte");
  };

  render() {
    return (
      // gestion view globale
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "white",
          marginLeft: -5.5,
          borderBottomWidth: 2,
          borderColor: "#rgba(217, 198, 186, 0.6)"
        }}
      >
        {/* affichage logo */}
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 45,
            height: 45,
            position: "absolute",
            top: 32,
            left: 10
          }}
          color="black"
        />
        {/* affichage btn menuburger */}
        <Button
          icon={
            <Image
              source={require("../assets/menu.png")}
              style={{ width: 25, height: 25, marginTop: 3 }}
              color="black"
            />
          }
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 30,
            right: 10
          }}
          onPress={() => {
            this.onPress();
          }}
        />
      </View>
    );
  }
}

export default withNavigation(Header);
