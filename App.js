import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Heart from "./assets/icons/heart";
import LikeIcon from "./assets/icons/like.icon";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <View style={styles.overlay}>
                <View style={styles.iconWrapper}>
                  <Icon name="heart" type="evilicon" color="white" size={30} />
                </View>
              </View>
              <View>
                <Image
                  style={{ flex: 1 }}
                  source={{
                    uri:
                      "https://static.pexels.com/photos/193021/pexels-photo-193021.jpeg"
                  }}
                />
              </View>
            </View>
            <View style={styles.cardFooterContainer}>
              <Text>footer</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  cardContainer: {
    backgroundColor: "green",
    width: 400,
    height: 300,
    marginTop: 10,

    flexDirection: "column"
  },
  card: {
    backgroundColor: "blue",
    flex: 1,
    flexDirection: "column"
  },
  overlay: {
    zIndex: 2,
    position: "absolute",
    alignSelf: "flex-end"
  },
  icon: {
    marginTop: 20,
    marginRight: 20
  },
  iconWrapper: {
    marginTop: 5,
    marginRight: 5
  },
  imageContainer: {
    flex: 3
  },
  cardFooterContainer: {
    flex: 1,
    backgroundColor: "yellow"
  }
});
