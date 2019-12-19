import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

class MappsPN extends Component {
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
          height: "80%",
          marginTop: 60,
          marginBottom: -80,
          marginLeft: 3
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
        </MapView>
      </View>
    );
  }
}

export default MappsPN;
