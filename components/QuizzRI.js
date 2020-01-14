import React, { Component } from "react";
import { ip } from "../config";
import { Button, Icon } from "react-native-elements";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import BtnGoHome from "./BtnGoHome";

class MultiStep extends Component {
  state = {
    currentStep: 0,
    steps: [],
    answer: "",
    correct: true
  };

  componentDidMount() {
    fetch(`http://${ip}:3001/enigmas/QuizzRI`) // fetch sur la route / de enigmas/QuizzRI
      .then(res => res.json()) // récupère les données du quizz
      .then(data => this.setState({ steps: data }));
  }

  // permet afficher la step en cours et de vérifier correct avec gestion de l'erreur
  getIntermediarySteps = () => {
    const { steps, currentStep, answer, correct } = this.state;
    return (
      <>
        {/* affiche la question */}
        <Text>{steps[currentStep] && steps[currentStep].question}</Text>
        {/* vérifie si la réponse est correcte ou non */}
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
        {/* affiche autant de btn réponse que de proposition de réponse qu'il y a en back */}
        {steps[currentStep].reponse1 ? (
          <Button
            key={steps[currentStep].reponse1}
            title={steps[currentStep].reponse1}
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              flexDirection: "column",
              marginLeft: 40,
              marginTop: 10,
              width: 200,
              height: 40,
              borderRadius: 25,
              backgroundColor: "#D9C6BA"
            }}
            onPress={() => this.handleValidate(steps[currentStep].reponse1)}
          />
        ) : (
          <Text></Text>
        )}
        {steps[currentStep].reponse2 ? (
          <Button
            key={steps[currentStep].reponse2}
            title={steps[currentStep].reponse2}
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              flexDirection: "column",
              marginLeft: 40,
              marginTop: 10,
              width: 200,
              height: 40,
              borderRadius: 25,
              backgroundColor: "#D9C6BA"
            }}
            onPress={() => this.handleValidate(steps[currentStep].reponse2)}
          />
        ) : (
          <Text></Text>
        )}
        {steps[currentStep].reponse3 ? (
          <Button
            key={steps[currentStep].reponse3}
            title={steps[currentStep].reponse3}
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              flexDirection: "column",
              marginLeft: 40,
              marginTop: 10,
              width: 200,
              height: 40,
              borderRadius: 25,
              backgroundColor: "#D9C6BA"
            }}
            onPress={() => this.handleValidate(steps[currentStep].reponse3)}
          />
        ) : (
          <Text></Text>
        )}
      </>
    );
  };

  // permet de vérifier réponse du user, si oui passe à la step suivante, si non vide state.answer pour que user recommence, si lastStep redirige vers ThemeList
  handleValidate = (answer = this.state.answer) => {
    //valeur par défaut
    const { steps, currentStep } = this.state;

    if (steps.length > 0 && steps[currentStep].solution === answer) {
      // bonne réponse
      if (currentStep < steps.length) {
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
        this.props.navigation.navigate("ThemeList");
      }
    } else {
      //mauvaise réponse
      this.setState({ correct: false, answer: "" });
    }
  };

  render() {
    const { steps, currentStep } = this.state;
    //on vérifie si données reçues et gère le cas du non
    if (steps.length <= 0) {
      // pas encore reçu les data du fetch
      return <Text>En attente des données...</Text>;
    }

    return (
      <View style={{ width: "98%", height: "100%" }}>
        <BtnGoHome />
        <View
          style={{
            width: "90%",
            height: "50%",
            marginTop: 200,
            marginLeft: 25,
            paddingLeft: 15
          }}
        >
          {/* test si on est à la dernière step, si oui appel PNLastStep, sinon exécute getIntermediarySteps() */}
          {steps[currentStep] && steps[currentStep].isLast ? (
            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 30, marginLeft: 120 }}>
                {steps[currentStep] && steps[currentStep].question}
              </Text>
              <Button
                title="Retour"
                titleStyle={{
                  color: "black",
                  fontSize: 14
                }}
                buttonStyle={{
                  backgroundColor: "#C1EA69",
                  marginLeft: 20,
                  marginTop: 80,
                  width: "80%",
                  height: 38
                }}
                onPress={() => this.props.navigation.navigate("ThemeList")}
              />
            </View>
          ) : (
            this.getIntermediarySteps()
          )}
        </View>
      </View>
    );
  }
}

export default withNavigation(MultiStep);
