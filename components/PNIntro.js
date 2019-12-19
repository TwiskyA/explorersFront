import React, { Component } from "react";
import MappsPN from "./MappsPN";
import { Button, Icon } from "react-native-elements";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";

class PNIntro extends Component {
  state = {
    enigme: []
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      // gestion affichage global
      <View
        style={{
          width: "98%",
          height: "90%",
          position: "absolute",
          marginTop: "12%",
          marginLeft: "1%",
          borderWidth: 2,
          borderTopColor: "#D7D7D6",
          borderColor: "transparent",
          borderRadius: 15,
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: -10
          },
          shadowRadius: 50,
          shadowOpacity: 1.0,
          elevation: 15
        }}
      >
        {/* gestion btn retour en arrière */}
        <Button
          icon={<Icon name="arrow-back" color="black" />}
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 4,
            left: 15,
            zIndex: 4,
            borderColor: "transparent",
            borderRadius: 5
          }}
          onPress={() => navigate("TrailDetails")}
        />
        <View
          style={{
            width: "90%",
            height: "60%",
            marginTop: 120,
            marginLeft: 35,
            marginRight: 15,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          {/* affichage titre et explications */}
          <Text style={{ fontSize: 22, fontWeight: "700" }}>
            But de l'énigme du Pont-Neuf :
          </Text>
          <Text> </Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Tu vas découvrir à quelle date le plus vieux pont de Paris fut
            classé aux monuments historiques !
          </Text>
          {/* affichage de la map */}
          <MappsPN />
          <Button
            title="GO"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              marginLeft: 3,
              width: "91%",
              height: 40,
              marginTop: 50
            }}
            onPress={() => {
              this.props.navigation.navigate("PNStep");
            }}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(PNIntro);
