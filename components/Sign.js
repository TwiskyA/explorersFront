import React, { Component } from "react";
import { ip } from "../config";
import Inscription from "./Inscription";
import Connexion from "./Connexion";
import { View, Image, TextInput, AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";
import { Text, Button } from "react-native-elements";
// import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome } from "@expo/vector-icons";

class Sign extends Component {
  state = {
    userInfos: {
      name: "",
      email: "",
      password: "",
      isTeacher: false
    },
    connexionMode: false
  };

  onPressInsc = () => {
    var signupData = JSON.stringify({
      name: this.state.userInfos.firstName,
      email: this.state.userInfos.email,
      password: this.state.userInfos.password,
      isTeacher: this.state.userInfos.isTeacher
    });
    // fetch pour enregistrer le user ou le récupérer en fonction de la route
    fetch(
      `http://${ip}:3001/users/${
        this.state.connexionMode ? "signin" : "signup"
      }`,
      {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: signupData
      }
    )
      .then(response => {
        // return response.json();
        return response.text();
      })
      // Load data in local storage and navigate to home page // comme on renvoie user tout court c'est pas data.user mais data
      .then(async data => {
        await AsyncStorage.setItem("user", JSON.stringify(data));
        this.setState({
          userInfos: {
            name: "",
            email: "",
            password: "",
            isTeacher: false
          },
          connexionMode: false
        });
        this.props.navigation.navigate("ThemeList");
      })
      .catch(error => {
        console.error("Request failed in my Signin Home request", error);
      });
    console.log(this.state.userInfos);
  };

  // permet d'orienter sur la route signin lors du fetch de OnPressInsc
  onPressConnex = () => this.setState({ connexionMode: true });
  // permet d'orienter sur la route signup lors du fetch de OnPressInsc
  onPressInscription = () => this.setState({ connexionMode: false });

  // initialisation des Name, Email, Password et IsTeacher dans state.userInfos en les accumulant
  setName = value =>
    this.setState({ userInfos: { ...this.state.userInfos, name: value } });

  setEmail = value =>
    this.setState({ userInfos: { ...this.state.userInfos, email: value } });

  setPassword = value =>
    this.setState({ userInfos: { ...this.state.userInfos, password: value } });

  toggleIsTeacher = () =>
    this.setState({
      userInfos: {
        ...this.state.userInfos,
        isTeacher: !this.state.userInfos.isTeacher
      }
    });

  render() {
    const { navigate } = this.props.navigation;
    const { connexionMode } = this.state;
    return (
      // gestion de l'affichage global
      <View
        style={{
          width: "90%",
          height: 500,
          marginTop: "15%",
          marginLeft: "5%",
          borderWidth: 1,
          borderColor: "#DDDDDD",
          borderRadius: 8,
          marginBottom: 20,
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
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            top: "6%",
            left: "39%"
          }}
          color="black"
        />
        {/* gestion de l'encart des btn connexion et inscription */}
        <View
          style={{
            width: "90%",
            height: "10%",
            flexDirection: "row",
            marginTop: 100,
            marginLeft: 15
          }}
        >
          {/* gestion du petit rond vert */}
          <Button
            title="Connexion"
            titleStyle={{ color: "black", marginLeft: 5 }}
            buttonStyle={{
              backgroundColor: "transparent",
              position: "absolute",
              left: 25,
              top: 3,
              marginTop: "4%",
              borderColor: "transparent",
              flexDirection: "column-reverse"
            }}
            icon={
              connexionMode && (
                <FontAwesome name="circle" size={10} color="#C1EA69" />
              )
            }
            onPress={this.onPressConnex}
          />
          <Button
            title="Inscription"
            titleStyle={{ color: "black", marginLeft: 5 }}
            buttonStyle={{
              backgroundColor: "transparent",
              position: "absolute",
              left: 150,
              top: 3,
              marginTop: "4%",
              borderColor: "transparent",
              flexDirection: "column-reverse"
            }}
            icon={
              !connexionMode && (
                <FontAwesome name="circle" size={10} color="#C1EA69" />
              )
            }
            onPress={this.onPressInscription}
          />
        </View>
        {/* en fonction de l'état de connexionMode, on passe certaines infos en props respectivements à connexion et a inscription*/}
        {connexionMode ? (
          <Connexion
            name={this.state.userInfos.name}
            setName={this.setName}
            password={this.state.userInfos.password}
            setPassword={this.setPassword}
          />
        ) : (
          <Inscription
            name={this.state.userInfos.name}
            setName={this.setName}
            email={this.state.userInfos.email}
            setEmail={this.setEmail}
            password={this.state.userInfos.password}
            setPassword={this.setPassword}
            isTeacher={this.state.userInfos.isTeacher}
            toggleIsTeacher={this.toggleIsTeacher}
          />
        )}
        {/* btn de connexion/validation de l'inscription/connexion */}
        <Button
          title="Se connecter"
          titleStyle={{
            color: "black",
            fontSize: 14
          }}
          buttonStyle={{
            backgroundColor: "#C1EA69",
            position: "absolute",
            marginLeft: "9%",
            marginBottom: -18,
            width: "80%",
            height: 38,
            position: "absolute",
            bottom: 0
          }}
          onPress={() => {
            this.onPressInsc();
          }}
        />
      </View>
    );
  }
}

export default withNavigation(Sign);

// ----------------------------------------------------------------------------------------------------------------------------

// class Inscription extends Component {
//   render() {
//     const {
//       firstName,
//       setFirstName,
//       email,
//       setEmail,
//       password,
//       setPassword,
//       isTeacher,
//       toggleIsTeacher
//     } = this.props;
//     return (
//       // gestion de la vue globale
//       <View
//         style={{
//           width: "90%",
//           height: 290,
//           marginLeft: "5%",
//           marginBottom: 20,
//           marginRight: 5,
//           backgroundColor: "white"
//         }}
//       >
//         {/* début du form d'inscription */}
//         <Text style={{ position: "absolute", top: 8, left: 38 }}>
//           Your FirstName
//         </Text>
//         <TextInput
//           style={{
//             backgroundColor: "#F2F2F2",
//             width: 180,
//             marginLeft: 35,
//             marginTop: 30,
//             paddingLeft: 10,
//             borderWidth: 1.5,
//             borderRadius: 5
//           }}
//           onChangeText={value => setFirstName(value)}
//           value={firstName}
//           placeholder="John Doe"
//         />
//         <Text style={{ position: "absolute", top: 78, left: 38 }}>
//           Your Email
//         </Text>
//         <TextInput
//           style={{
//             backgroundColor: "#F2F2F2",
//             width: 180,
//             marginLeft: 35,
//             marginTop: 38,
//             paddingLeft: 10,
//             borderWidth: 1.5,
//             borderRadius: 5
//           }}
//           onChangeText={value => setEmail(value)}
//           value={email}
//           placeholder="john@gmail.com"
//         />
//         <Text style={{ position: "absolute", top: 148, left: 38 }}>
//           Your Password
//         </Text>
//         <TextInput
//           style={{
//             backgroundColor: "#F2F2F2",
//             width: 180,
//             marginLeft: 35,
//             marginTop: "14%",
//             paddingLeft: 10,
//             borderWidth: 1.5,
//             borderRadius: 5
//           }}
//           onChangeText={value => setPassword(value)}
//           value={password}
//           placeholder="********"
//         />
//         <Text style={{ position: "absolute", top: 218, left: 40 }}>
//           Teacher
//         </Text>
//         <SwitchToggle
//           containerStyle={{
//             marginTop: 40,
//             marginLeft: 40,
//             width: 60,
//             height: 30,
//             borderRadius: 25,
//             backgroundColor: "white",
//             padding: 5
//           }}
//           circleStyle={{
//             width: 30,
//             height: 30,
//             borderRadius: 15,
//             borderWidth: 1,
//             borderColor: "grey",
//             backgroundColor: "white"
//           }}
//           switchOn={isTeacher}
//           onPress={toggleIsTeacher}
//           circleColorOff="white"
//           circleColorOn="#C1EA69"
//           duration={500}
//         />
//       </View>
//     );
//   }
// }

// -----------------------------------------------------------------------------------------------------------

// class Connexion extends Component {
//   render() {
//     const { firstName, setFirstName, password, setPassword } = this.props;
//     return (
//       // début du form de connexion
//       <View
//         style={{
//           width: "90%",
//           height: 290,
//           marginLeft: "5%",
//           marginBottom: 20,
//           marginRight: 5,
//           backgroundColor: "white"
//         }}
//       >
//         <Text style={{ position: "absolute", top: 8, left: 38 }}>
//           Your FirstName
//         </Text>
//         <TextInput
//           style={{
//             backgroundColor: "#F2F2F2",
//             width: 180,
//             marginLeft: 35,
//             marginTop: 30,
//             paddingLeft: 10,
//             borderWidth: 1.5,
//             borderRadius: 5
//           }}
//           onChangeText={value => setFirstName(value)}
//           value={firstName}
//           placeholder="John Doe"
//         />
//         <Text style={{ position: "absolute", top: 78, left: 38 }}>
//           Your Password
//         </Text>
//         <TextInput
//           style={{
//             backgroundColor: "#F2F2F2",
//             width: 180,
//             marginLeft: 35,
//             marginTop: 38,
//             paddingLeft: 10,
//             borderWidth: 1.5,
//             borderRadius: 5
//           }}
//           onChangeText={value => setPassword(value)}
//           value={password}
//           placeholder="********"
//         />
//       </View>
//     );
//   }
// }
