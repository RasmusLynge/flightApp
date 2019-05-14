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

const FlightItem = ({ flight }) => {
  return (
    <View style={styles.welcome}>
      <View style={styles.flexRow}>
        <Text style={[styles.headline, styles.shadow, styles.blue]}>
          From {flight.startDestination} To {flight.endDestination}
        </Text>
      </View>
      <View style={styles.flexRow}>{logoMaker(flight.airline)}</View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ width: 100, height: 25 }}>
          
        </View>
        <View
          style={{ width: 40, height: 25,}}
        >
          <Text>{flight.startDestination}</Text>
        </View>
        <View style={{ width: 70, height: 25,}}>
          <Text style={styles.center}>{flight.duration}</Text>
        </View>
        <View style={{ width: 50, height: 25,}}>
          <Text style={styles.center}>{flight.endDestination}</Text>
        </View>
        <View style={{ width: 50, height: 25, color: "#ec8074" }}>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ width: 100, height: 40 }} />
        <View style={{ width: 40, }}>
          <Text>{flight.departureTime}</Text>
        </View>
        <View style={{ width: 70, height: 40}}>
          <Text style={[styles.center, styles.orange]}>----></Text>
        </View>
        <View style={{ width: 50, height: 40}}>
          <Text style={styles.center}>
            {addTimes(flight.departureTime, flight.duration)}
          </Text>
        </View>
        <View style={{ width: 50, height: 40 }} />
        <View style={{ width: 70, height: 40 }}>
          <Text style={styles.center}>{flight.price} kr.</Text>
        </View>
      </View>
    </View>
  );
};

export default FlightItem;

const styles = StyleSheet.create({
  flexRow: {
    height: 25,
    backgroundColor: "white"
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32
  },
  border: {
    borderBottomColor: "#ec8074",
    borderBottomWidth: 1
  },
  shadow: {
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 1
      },
      android: {
        elevation: 20
      }
    })
  },
  welcome: {
    flex: 1,
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
    }),
    margin: 5
  },
  headline: {
    textAlign: "center",
    fontSize: 20
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
  },
  imageLogo: {
    height: 85,
    width: 85,
    marginTop: 5
  }
});

function logoMaker(airline) {
  if (airline === "Ryanair Ltd") {
    return (
      <Image
        style={styles.imageLogo}
        source={require("../img/ryanairLogo.png")}
      />
    );
  }
  if (airline === "International Airlines Group") {
    return (
      <Image style={styles.imageLogo} source={require("../img/iagLogo.png")} />
    );
  }
  if (airline === "Scandinavian Airline") {
    return (
      <Image style={styles.imageLogo} source={require("../img/sasLogo.png")} />
    );
  }
  if (airline === "Lufthansa Group") {
    return (
      <Image
        style={styles.imageLogo}
        source={require("../img/lufthansaLogo.png")}
      />
    );
  }
}

// Convert a time in hh:mm format to minutes
function timeToMins(time) {
  var b = time.split(":");
  return b[0] * 60 + +b[1];
}

// Convert minutes to a time in format hh:mm
// Returned value is in range 00  to 24 hrs
function timeFromMins(mins) {
  function z(n) {
    return (n < 10 ? "0" : "") + n;
  }
  var h = ((mins / 60) | 0) % 24;
  var m = mins % 60;
  return z(h) + ":" + z(m);
}

// Add two times in hh:mm format
function addTimes(t0, t1) {
  return timeFromMins(timeToMins(t0) + timeToMins(t1));
}
