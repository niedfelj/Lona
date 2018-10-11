import React from "react"
import { View, StyleSheet } from "react-native"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"

export default class BorderWidthColor extends React.Component {
  render() {


    return (
      <View style={[ styles.view, {} ]}>
        <View style={[ styles.view1, {} ]} />
      </View>
    );
  }
};

let styles = StyleSheet.create({
  view: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  view1: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: 10,
    borderWidth: 20,
    borderColor: colors.blue300,
    width: 100,
    height: 100
  }
})