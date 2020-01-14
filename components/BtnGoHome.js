import React, { Component } from "react";
import { Button, Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

class BtnGoHome extends Component {
  render() {
    return (
      <Button
        icon={<Icon name="arrow-back" color="black" />}
        buttonStyle={{
          backgroundColor: "transparent",
          position: "absolute",
          top: 25,
          left: 15,
          zIndex: 4,
          borderColor: "transparent",
          borderRadius: 5,
          ...this.props.style
        }}
        onPress={() => this.props.navigation.navigate("ThemeList")}
      />
    );
  }
}

BtnGoHome.defaultProps = {
  style: {}
};

export default withNavigation(BtnGoHome);
