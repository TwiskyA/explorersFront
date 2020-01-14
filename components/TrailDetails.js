import React, { Component } from "react";
import MyImage from "./Image";
import { ip } from "../config";
import SwitchMapps from "./SwitchMapps";
import { View, Image, ScrollView } from "react-native";
import { Button, Text, Icon } from "react-native-elements";
import { Foundation } from "@expo/vector-icons";
import BtnGoHome from "./BtnGoHome";

class TrailDetails extends Component {
  state = {
    trailDetails: {},
    displayTeacher: false
  };

  // toggle sur le state.displayTeacher
  onPress = () => {
    this.setState({ displayTeacher: !this.state.displayTeacher });
  };

  // renvoie vers PNIntro
  startEnigma = () => {
    this.props.navigation.navigate("PNIntro");
  };

  // permet fetch sur le bon parcours (pour avoir les bonnes données associées)
  componentDidMount() {
    fetch(`http://${ip}:3001/trails/${this.props.navigation.state.params.id}`) // fetch sur la route / de trails/id //192.168.1.21 || 10.2.4.18
      .then(res => res.json()) // récupère les données de trailList
      .then(data => this.setState({ trailDetails: data })); // avec ces données modifie le state de trailList
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {/*  gestion de l'affichage global */}
        <ScrollView
          style={{
            width: "100%",
            marginTop: 27,
            marginBottom: 50,
            borderBottomWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 5,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomColor: "rgba(217, 198, 186, 0.6)"
          }}
          showsVerticalScrollIndicator={false}
        >
          <BtnGoHome style={{ top: 4 }} />
          {/* gestion de l'image */}
          <MyImage
            type={this.state.trailDetails.img}
            style={{
              height: 250,
              width: "100%"
            }}
          />
          {/* btn de test pour ma logique de toggle des notions du programme si isTeacher est true */}
          <View
            style={{
              width: "86%",
              marginRight: 30,
              marginLeft: 30,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {/* <Button
              title="Teacher"
              titleStyle={{
                color: "black",
                fontSize: 14
              }}
              buttonStyle={{
                backgroundColor: "#C1EA69",
                width: 70,
                height: 35,
                borderRadius: 20
              }}
              onPress={() => {
                this.onPress();
              }}
            /> */}

            {/* gestion de l'affichage des données récupérées de trailList */}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
            >
              {/* titre du paprcours */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {this.state.trailDetails.parcours}
              </Text>
              {/* marker et lieu */}
              <Text style={{ marginRight: 10, marginBottom: 10, fontSize: 14 }}>
                <Foundation name="marker" size={20} color="#C1EA69" />
                <Text> </Text>
                {this.state.trailDetails.location}
              </Text>
            </View>
            {/* détails du parcours */}
            <Text style={{ fontSize: 16 }}>
              {this.state.trailDetails.subtitle}
            </Text>
            {/* si state.displayTeacher est true affiche les notions du programme */}
            {this.state.displayTeacher && (
              <Text style={{ fontSize: 18, fontWeight: "bold", height: 150 }}>
                {this.state.trailDetails.details}
              </Text>
            )}
          </View>

          <View>
            {/* détails notions programme */}
            <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: "bold" }}>
              {this.state.trailDetails.details}
            </Text>
            {/* matière */}
            <Text
              style={{
                marginLeft: 30,
                fontSize: 16,
                textDecorationLine: "underline"
              }}
            >
              {this.state.trailDetails.matiere}
            </Text>
            {/* notions abordées */}
            <Text style={{ marginLeft: 30, fontSize: 15 }}>
              {this.state.trailDetails.notions}
            </Text>
            {/* mais aussi */}
            <Text
              style={{
                fontSize: 15,
                textDecorationLine: "underline",
                marginTop: 12,
                marginLeft: 30
              }}
            >
              Mais aussi :
            </Text>
            {/* gestion de l'affichage des tags */}
            <View
              style={{
                marginLeft: 30,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              {Object.keys(this.state.trailDetails)
                .filter(keys => keys.includes("tag"))
                .map(tag => (
                  <Button
                    key={this.state.trailDetails[tag]}
                    title={this.state.trailDetails[tag]}
                    titleStyle={{
                      color: "black",
                      fontSize: 14
                    }}
                    buttonStyle={{
                      backgroundColor: "#D9C6BA",
                      marginTop: 8,
                      marginRight: 10,
                      height: 28,
                      borderRadius: 5
                    }}
                  />
                ))}

              {/* {this.state.trailDetails.tag1 && (
                <Button
                  title={this.state.trailDetails.tag1}
                  titleStyle={{
                    color: "black",
                    fontSize: 14
                  }}
                  buttonStyle={{
                    backgroundColor: "#D9C6BA",
                    marginTop: 8,
                    // width: 40,
                    width: "auto",
                    height: 28,
                    borderRadius: 5
                  }}
                />
              )}
              {this.state.trailDetails.tag2 && (
                <Button
                  title={this.state.trailDetails.tag2}
                  titleStyle={{
                    color: "black",
                    fontSize: 14
                  }}
                  buttonStyle={{
                    backgroundColor: "#D9C6BA",
                    marginTop: 8,
                    // width: 80,
                    width: "auto", //fitContent
                    height: 28,
                    borderRadius: 5
                  }}
                />
              )}
              {this.state.trailDetails.tag3 && (
                <Button
                  title={this.state.trailDetails.tag3}
                  titleStyle={{
                    color: "black",
                    fontSize: 14
                  }}
                  buttonStyle={{
                    backgroundColor: "#D9C6BA",
                    marginTop: 8,
                    // width: 60,
                    width: "auto",
                    height: 28,
                    borderRadius: 5
                  }}
                />
              )}
              {this.state.trailDetails.tag4 && (
                <Button
                  title={this.state.trailDetails.tag4}
                  titleStyle={{
                    color: "black",
                    fontSize: 14
                  }}
                  buttonStyle={{
                    backgroundColor: "#D9C6BA",
                    marginTop: 8,
                    // width: 90,
                    width: "auto",
                    height: 28,
                    borderRadius: 5
                  }}
                />
              )}
              {this.state.trailDetails.tag5 && (
                <Button
                  title={this.state.trailDetails.tag5}
                  titleStyle={{
                    color: "black",
                    fontSize: 14
                  }}
                  buttonStyle={{
                    backgroundColor: "#D9C6BA",
                    marginTop: 8,
                    marginLeft: 15,
                    // width: 140,
                    width: "auto",
                    height: 28,
                    borderRadius: 5
                  }}
                />
              )}
              {this.state.trailDetails.tag6 && (
                <Button
                  title={this.state.trailDetails.tag6}
                  titleStyle={{
                    color: "black",
                    fontSize: 14
                  }}
                  buttonStyle={{
                    backgroundColor: "#D9C6BA",
                    marginTop: 8,
                    marginLeft: 15,
                    // width: 150,
                    width: "auto",
                    height: 28,
                    borderRadius: 5
                  }}
                />
              )} */}
            </View>
          </View>

          {/* gestion affichage card avec la map intéractive */}
          <View
            style={{
              borderWidth: 1,
              borderColor: "#DDDDDD",
              borderRadius: 8,
              marginBottom: 20,
              marginLeft: "10%",
              marginTop: 15,
              width: "80%",
              justifyContent: "center",
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5
            }}
          >
            <View style={{ flex: 1 }}>
              {/* affiche la bonne map */}
              <SwitchMapps mapName={this.state.trailDetails.mapName} />
            </View>
            {/* gestion du picto et départ */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 187,
                marginLeft: 23,
                marginTop: "1%"
              }}
            >
              <Foundation name="marker" size={25} color="#C1EA69" />
              <Text style={{ marginTop: "4%" }}>Départ</Text>
            </View>

            {/* gestion de l'image et zone découverte */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/rctg.png")}
                style={{
                  width: 35,
                  height: 30,
                  marginLeft: 12
                }}
              />
              <Text
                h5
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: 5
                }}
              >
                Zone découverte
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                marginRight: 10,
                marginLeft: 10
              }}
            ></View>
          </View>
        </ScrollView>

        <View
          style={{
            width: "100%",
            height: 50
          }}
        >
          {/* gestion du bouton "choisir ce parcours" */}
          <Button
            title="Choisir ce parcours"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              marginLeft: "9%",
              marginBottom: "1.5%",
              width: "80%",
              height: 38,
              position: "absolute",
              bottom: "100%"
            }}
            onPress={() => {
              this.startEnigma();
            }}
          />
        </View>
      </View>
    );
  }
}

export default TrailDetails;
