import React, { Component } from "react";
import MyImage from "./Image";
import GetRating from "./GetRating";
import { View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Text } from "react-native-elements";
import { Foundation, FontAwesome } from "@expo/vector-icons";

// gestion des étoiles de scores (restera a vour pour les notes non-entières)
// const getRating = score => {
//   const rating = [];
//   for (let i = 1; i <= 5; i++) {
//     if (i <= score) {
//       rating.push(
//         <FontAwesome key={i} name="star" size={15} color="#C1EA69" />
//       );
//     } else {
//       rating.push(
//         <FontAwesome key={i} name="star" size={15} color="#D9C6BA" />
//       );
//     }
//   }
//   return rating;
// };

class TrailCard extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      // rend chaque card clickable
      <TouchableOpacity
        onPress={() => navigate("TrailDetails", { id: this.props.id })}
      >
        {/* gestion de la view globale de la card */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 8,
            marginBottom: 15,
            marginRight: 5,
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
          {/* gestion de l'image de la card */}
          <MyImage
            type={this.props.img}
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              height: 215,
              marginBottom: -5,
              width: "100%"
            }}
          />
          {/* gestion du text de la card */}
          <Text
            style={{
              marginRight: 10,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 14
            }}
          >
            {/* gestion du marker et du lieu */}
            <Foundation
              name="marker"
              size={15}
              color="#C1EA69"
              iconStyle={{ marginRight: 15 }}
            />
            <Text> </Text>
            {this.props.location}
          </Text>
          {/* gestion du titre du parcours */}
          <Text
            style={{
              marginRight: 10,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {this.props.parcours}
          </Text>
          {/* gestion des détails du parcours */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
              marginRight: 10,
              marginLeft: 10,
              fontSize: 16
            }}
          >
            <View style={{ width: 200 }}>
              <Text>{this.props.subtitle}</Text>
            </View>
            <Text style={{ marginTop: 17 }}>
              <GetRating score={this.props.rating} />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(TrailCard);
