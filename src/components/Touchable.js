import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}></Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text> conge de printement </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20
  },
  countContainer: {
    alignItems: "center",
    padding: 20
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableWithoutFeedbackExample;