import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";
import Fetch from "../fetch/FetchFlights";
import Logo from "../img/LogoSample.png";
import FlightItem from "../components/FlightItem"

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    from: "denmark",
    to: "sweden",
    date: "14-4-2019",
    flightData: []
  };
  handleTo = text => {
    this.setState({ to: text });
  };
  handleFrom = text => {
    this.setState({ from: text });
  };
  handleDate = text => {
    this.setState({ date: text });
  };
  search = async (to, from, date) => {
    const url = await Fetch.directions(from, to, date);
    const flightData = await Fetch.fetchData(url);
    this.setState({ flightData });
  };
  flightList = () => {
    if (this.state.flightData && this.state.flightData.length > 0) {
      flightList = this.state.flightData.map(e => <FlightItem key={e.id} flight={e} />);
      return flightList;
    } else {
      return (
        <View>
          <Text style={[styles.headline, styles.blue]}>
            Welcome to the Scandinair app!
          </Text>
          <Text style={[styles.blue, styles.center]}>Search for at flight</Text>
        </View>
      );
    }
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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <View style={styles.container}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="from"
                  placeholderTextColor="#167990"
                  autoCapitalize="none"
                  onChangeText={this.handleFrom}
                />

                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="to"
                  placeholderTextColor="#167990"
                  autoCapitalize="none"
                  onChangeText={this.handleTo}
                />
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="date"
                  placeholderTextColor="#167990"
                  autoCapitalize="none"
                  onChangeText={this.handleDate}
                />
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() =>
                    this.search(this.state.to, this.state.from, this.state.date)
                  }
                >
                  <Text style={styles.submitButtonText}>
                    {" "}
                    Search for Flights{" "}
                  </Text>
                </TouchableOpacity>
              </View>
              <this.flightList />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32
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
