import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";

class Mapps extends Component {
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
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
          region={this.state.region}
          onLayout={this.onMapLayout}
        >
          {this.state.isReady && (
            <Marker
              title="Pont-Neuf"
              pinColor="#C1EA69"
              coordinate={{
                latitude: 48.858001,
                longitude: 2.341353
              }}
            />
          )}
          {this.state.isReady && (
            <Polygon
              coordinates={[
                { latitude: 48.881304, longitude: 2.346062 },
                { latitude: 48.862505, longitude: 2.352124 },
                { latitude: 48.858001, longitude: 2.341353 },
                { latitude: 48.852153, longitude: 2.291786 },
                { latitude: 48.875323, longitude: 2.316815 }
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

export default Mapps;
