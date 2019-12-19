import React from "react";
import MappsChateau from "./MappsChateau";
import MappsRevo from "./MappsRevo";
import MappsParc from "./MappsParc";
import Mapps from "./Mapps";

const SwitchMapps = ({ mapName }) => {
  switch (mapName) {
    case "chateau":
      return <MappsChateau />;
    case "parc":
      return <MappsParc />;
    case "revo":
      return <MappsRevo />;
    default:
      return <Mapps />;
  }
};

export default SwitchMapps;
