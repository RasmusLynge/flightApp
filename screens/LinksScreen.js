import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Platform } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
          <Image source={require("../img/LogoSample.png")} />
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          />
        </View>
        <ScrollView style={styles.container}>
          <Text>Login could be here</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
