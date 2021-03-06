import React from "react";

import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
  <View style={styles.containerStyle}>
  {props.children}
  </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    elevation: 1
  }
});

export default Card;
