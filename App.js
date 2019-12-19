import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TrailDetails from "./components/TrailDetails";
import ThemeList from "./components/ThemeList";
import Compte from "./components/Compte";
import Mapps from "./components/Mapps";
import Sign from "./components/Sign";
import PNIntro from "./components/PNIntro";
import PNStep from "./components/PNStep";
import PNFinal from "./components/PNFinal";
import QuizzRI from "./components/QuizzRI";

const navigationOptions = () => ({
  header: null
});

// mise en place de la navigation
const MainNavigator = createStackNavigator({
  Home: {
    screen: Sign,
    navigationOptions
  },
  ThemeList: {
    screen: ThemeList,
    navigationOptions
  },
  TrailDetails: {
    screen: TrailDetails,
    navigationOptions
  },

  Compte: {
    screen: Compte,
    navigationOptions
  },

  Mapps: {
    screen: Mapps,
    navigationOptions
  },
  PNIntro: {
    screen: PNIntro,
    navigationOptions
  },
  PNStep: {
    screen: PNStep,
    navigationOptions
  },
  PNFinal: {
    screen: PNFinal,
    navigationOptions
  },
  QuizzRI: {
    screen: QuizzRI,
    navigationOptions
  }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
