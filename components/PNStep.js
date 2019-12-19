import React, { Component } from "react";
import PNLastStep from "./PNLastStep";
import { ip } from "../config";
import { Button, Icon } from "react-native-elements";
import { View, Text, TextInput } from "react-native";
import { withNavigation } from "react-navigation";

class MultiStep extends Component {
  state = {
    currentStep: 0,
    steps: [],
    answer: "",
    correct: true
  };

  componentDidMount() {
    fetch(`http://${ip}:3001/enigmas/PN`) // fetch sur la route / de enigmas/PN
      .then(res => res.json()) // récupère les données de enigme
      .then(data => this.setState({ steps: data }));
  }

  // permet afficher la step en cours et de vérifier correct avec gestion de l'erreur
  getIntermediarySteps = () => {
    const { steps, currentStep, answer, correct } = this.state;
    return (
      <>
        <Text>{steps[currentStep] && steps[currentStep].instruction}</Text>
        {correct ? (
          <Text></Text>
        ) : (
          <Text
            style={{
              fontSize: 12,
              color: "red"
            }}
          >
            Mauvaise réponse, allez on essaie à nouveau !{" "}
          </Text>
        )}
        {/* gestion input du user */}
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 240,
            marginLeft: 20,
            marginTop: 30,
            marginBottom: 15,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={this.handleChange}
          value={answer}
          placeholder="Votre Réponse"
        />
        <Button
          title="Valider"
          titleStyle={{
            color: "black",
            fontSize: 14
          }}
          buttonStyle={{
            backgroundColor: "#C1EA69",
            marginLeft: 20,
            marginBottom: -18,
            width: "80%",
            height: 38,
            position: "absolute",
            bottom: -30
          }}
          onPress={() => {
            this.handleValidate();
          }}
        />
      </>
    );
  };

  // permet d'écouter réposne de user et de stocker dans state.answer
  handleChange = value => this.setState({ answer: value });

  // permet de vérifier réponse du user, si oui passe à la step suivante, si non vide state.answer pour que user recommence, si lastStep redirige vers PNFinal
  handleValidate = (answer = this.state.answer) => {
    //valeur par défaut
    const { steps, currentStep } = this.state;

    if (steps.length > 0 && steps[currentStep].solution === answer) {
      // bonne réponse
      if (currentStep < steps.length - 1) {
        //car on ne veut pas la dernière (qui est la réponse)
        // il reste des steps
        this.setState({
          currentStep: currentStep + 1,
          correct: true,
          answer: ""
        });
      } else {
        // toutes les steps ont été faites
        this.setState({ currentStep: 0, answer: "", steps: [] });
        this.props.navigation.navigate("PNFinal");
      }
    } else {
      //mauvaise réponse
      this.setState({ correct: false, answer: "" });
    }
  };

  render() {
    const { steps, currentStep } = this.state;

    if (steps.length <= 0) {
      // pas encore reçu les data du fetch
      return <Text>en attente des données</Text>;
    }

    return (
      // gestion view globale
      <View style={{ width: "98%", height: "100%" }}>
        {/* btn retour en arrière */}
        <Button
          icon={<Icon name="arrow-back" color="black" />}
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 25,
            left: 15,
            zIndex: 4,
            borderColor: "transparent",
            borderRadius: 5
          }}
          onPress={() => this.props.navigation.navigate("ThemeList")}
        />
        <View
          style={{
            width: "90%",
            height: "50%",
            marginTop: 200,
            marginLeft: 25,
            paddingLeft: 15
          }}
        >
          {/* vérifier si dernière step ou pas */}
          {steps[currentStep] && steps[currentStep].isLast ? (
            <PNLastStep
              steps={steps}
              currentStep={currentStep}
              validate={this.handleValidate}
            />
          ) : (
            this.getIntermediarySteps()
          )}
        </View>
      </View>
    );
  }
}

export default withNavigation(MultiStep);
