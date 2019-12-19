import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";

class PNFinal extends Component {
  state = {
    enigme: []
  };

  render() {
    return (
      <View
        style={{
          width: "98%",
          height: "94.5%",
          position: "absolute",
          marginTop: "9%",
          marginLeft: 3,
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
        <View
          style={{
            width: "90%",
            height: "90%",
            marginBottom: 20,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              marginLeft: 75
            }}
          >
            Félicitations !!!
          </Text>
          <Text> </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              marginLeft: 7,
              marginRight: 7,
              textAlign: "justify"
            }}
          >
            Vous avez résolu l'énigme du Pont-Neuf !
          </Text>
          <Text> </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 7,
              marginRight: 7,
              textAlign: "justify"
            }}
          >
            Le Pont-Neuf est le plus vieux pont de la ville de Paris.{"\n"}Sa
            construction à débuté l'année 1578 et à durée 29 ans.{"\n"}Comme
            vous l'avez habilement deviné, il fut classé aux monuments
            historiques en 1894.
          </Text>
          <Text> </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              marginLeft: 7,
              marginRight: 7,
              textAlign: "justify"
            }}
          >
            *Le statut de monument historique permet à certains bâtiments ou
            objets qui ont eu un rôle important d'un point de vue historique,
            artistique, architectural, technique ou scientifique, d'être
            protégés et entretenu au fil des années.
          </Text>
          <Button
            title="Retour aux parcours"
            titleStyle={{
              color: "black",
              fontSize: 15
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              marginLeft: "8%",
              marginBottom: 4,
              width: "80%",
              height: 40,
              marginTop: 50
            }}
            onPress={() => {
              this.props.navigation.navigate("ThemeList");
            }}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(PNFinal);
