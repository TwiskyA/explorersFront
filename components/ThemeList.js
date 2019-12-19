import React, { Component } from "react";
import Header from "./Header";
import TrailCard from "./TrailCard";
import { ip } from "../config";
import { View, ScrollView, AsyncStorage } from "react-native";
import { Button, Text } from "react-native-elements";
import { Feather, Ionicons } from "@expo/vector-icons";

class ThemeList extends Component {
  state = {
    trailList: []
  };

  // permet d récupérer les données du back (stocké dans trailList)
  componentDidMount() {
    fetch(`http://${ip}:3001/trails`) // fetch sur la route / de trails //192.168.1.21
      .then(res => res.json()) // récupère les données de trailList
      .then(data => this.setState({ trailList: data })); // avec ces données modifie le state de trailList
  }

  // renvoir vers QuizzRI
  onPress = () => {
    this.props.navigation.navigate("QuizzRI");
  };

  render() {
    const { trailList } = this.state;

    return (
      <View>
        <View
          style={{
            width: "100%",
            height: "100%",
            zIndex: -12,
            backgroundColor: "#F0F0F0"
          }}
        >
          {/* gestion de l'ensemble des éléments de la 'page' */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 5
            }}
          >
            <Header />
            {/* gestion de l'encart du corps de la page */}
            <ScrollView
              style={{
                width: "90%",
                height: "120%",
                marginBottom: -5,
                zIndex: 0
              }}
              showsVerticalScrollIndicator={false}
            >
              {/* gestion  de l'encart pour "quizz du moi"*/}
              <View
                style={{
                  paddingTop: 5,
                  marginTop: 10,
                  width: "60%",
                  height: "5%",
                  marginBottom: -15
                }}
              >
                {/* gestion de l'écriture/du texte de l'encart "quizz du mois" */}
                <Text
                  style={{
                    color: "black",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    fontSize: 25
                  }}
                >
                  {/* texte apparaissant dans l'encart */}
                  Quizz du mois
                </Text>
              </View>
              {/* gestion de l'encart commun nbre questions + thème du quizz */}
              <View style={{ marginBottom: 70 }}>
                <View
                  style={{
                    width: "100%",
                    height: 90,
                    borderWidth: 1,
                    borderColor: "#rgb(217, 198, 186)",
                    borderRadius: 5,
                    marginBottom: 2,
                    marginTop: -5,
                    marginRight: 5,
                    backgroundColor: "rgba(217, 198, 186, 0.6)"
                  }}
                >
                  <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 14 }}>
                    15 Questions
                  </Text>
                  <Text
                    h4
                    style={{ marginRight: 20, marginLeft: 10, fontSize: 17 }}
                  >
                    Révolution Industrielle
                  </Text>
                  <Button
                    icon={<Ionicons name="ios-arrow-forward" size={20} />}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      position: "absolute",
                      bottom: 4,
                      right: 20,
                      borderColor: "transparent",
                      borderRadius: 5
                    }}
                    onPress={() => {
                      this.onPress();
                    }}
                  />
                </View>
                {/* gestion  de l'encart "tous les parcours"*/}
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginTop: 25,
                    marginBottom: 10
                  }}
                >
                  Tous les parcours
                  <Text> </Text>
                  <Feather name="sliders" size={20} />
                </Text>
                {/* map sur l'array trailList pour afficher autant de TrailCard que souhaité */}
                {trailList.map((trail, i) => (
                  <TrailCard
                    key={trail.id + i}
                    id={trail.id}
                    location={trail.location}
                    parcours={trail.parcours}
                    rating={trail.rating}
                    subtitle={trail.subtitle}
                    img={trail.img}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default ThemeList;
