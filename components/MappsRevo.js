import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";

class MappsRevo extends Component {
  state = {
    currentLatitude: 0,
    currentLongitude: 0,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
    position: [],
    isReady: false
  };

  onMapLayout = () => {
    this.setState({ isReady: true });
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "80%"
        }}
      >
        <MapView
          style={{
            width: 286,
            height: 200,
            marginBottom: 12,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20
          }}
          zoomEnabled={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 48.864824,
            longitude: 2.334595,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07
          }}
          region={this.state.region}
          onLayout={this.onMapLayout}
        >
          {this.state.isReady && (
            <Marker
              title="Concorde"
              pinColor="#C1EA69"
              coordinate={{
                latitude: 48.865852,
                longitude: 2.321204
              }}
            />
          )}
          {this.state.isReady && (
            <Polygon
              coordinates={[
                { latitude: 48.881304, longitude: 2.346062 },
                { latitude: 48.865852, longitude: 2.321204 }, //concorde
                { latitude: 48.856232, longitude: 2.297859 }, //mars
                { latitude: 48.848623, longitude: 2.395921 } //place nation
              ]}
              strokeColor="rgb(217, 198, 186)"
              // au cas où strokeColor, n'est pas supporté
              strokeColors={[
                "#D9C6BA",
                "#D9C6BA",
                "#D9C6BA",
                "#D9C6BA",
                "#D9C6BA"
              ]}
              strokeWidth={3}
              fillColor="rgba(217, 198, 186, 0.5)"
            />
          )}
        </MapView>
      </View>
    );
  }
}

export default MappsRevo;
