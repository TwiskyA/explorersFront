import React, { Component } from "react";
import { Foundation, FontAwesome } from "@expo/vector-icons";

// class GetRating extends Component {
//   render() {
//     return (

//     );
//   }
// }
//props = 1er argu des composants fct
const getRating = ({ score }) => {
  // <=> en class a this.props.score
  const rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      rating.push(
        <FontAwesome key={i} name="star" size={15} color="#C1EA69" />
      );
    } else {
      rating.push(
        <FontAwesome key={i} name="star" size={15} color="#D9C6BA" />
      );
    }
  }
  return rating;
};

export default getRating;
