import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";

class MappsParc extends Component {
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
            latitude: 48.856577,
            longitude: 2.358596,
            latitudeDelta: 0.079,
            longitudeDelta: 0.079
          }}
          region={this.state.region}
          onLayout={this.onMapLayout}
        >
          {this.state.isReady && (
            <Marker
              title="Belleville"
              pinColor="#C1EA69"
              coordinate={{
                latitude: 48.870821,
                longitude: 2.385451
              }}
            />
          )}
          {this.state.isReady && (
            <Polygon
              coordinates={[
                { latitude: 48.881304, longitude: 2.346062 },
                { latitude: 48.878008, longitude: 2.38074 }, //chaumont
                { latitude: 48.870821, longitude: 2.385451 }, //belleville
                { latitude: 48.82955, longitude: 2.410745 }, //vincennes
                { latitude: 48.880446, longitude: 2.309384 } //monceau
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

export default MappsParc;
