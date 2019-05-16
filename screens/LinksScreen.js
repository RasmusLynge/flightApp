import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Platform, TextInput, Button } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import Facade from "../fetch/UserFetch";
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      username: 'user',
      password: 'userpw'
    }
  }

  login = async evt => {
    evt.preventDefault();
    await Facade.login(this.state.username, this.state.password)
    this.props.navigation.navigate('Home');
    //console.log(this.state.username, this.state.password)
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
        <Text>Login Screen</Text>
        <TextInput
            placeholder="Enter Username"
            style={{ width: 200, margin: 10 }}
            onChangeText={username => this.setState({ username })}
        />

        <TextInput
            placeholder="Enter Password"
            style={{ width: 200, margin: 10 }}
            onChangeText={password => this.setState({ password })}
        />
        <Text>{JSON.stringify(this.state)}</Text>
        <Button
            title="Submit"
            onPress={ this.login }
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50
  },
  welcome: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff",
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
    })
  },
  headline: {
    textAlign: "center",
    fontSize: 25
  },
  center: {
    textAlign: "center"
  },
  orange: {
    color: "#ec8074"
  },
  blue: {
    color: "#167990"
  },
  inputBox: {
    flexDirection: "row"
  },
  buttonRow: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  input: {
    margin: 5,
    width: 120,
    height: 40,
    textAlign: "center",
    borderColor: "#ec8074",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "#ec8074",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    textAlign: "center",
    color: "white"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
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
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
