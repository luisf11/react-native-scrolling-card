import React from "react";

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";


const data = [
  {
    key: 1,
    imageUrl: "http://via.placeholder.com/300x400",
    title: "something"
  },
  {
    key: 2,
    imageUrl: "http://via.placeholder.com/300x400",
    title: "something two"
  },
  {
    key: 3,
    imageUrl: "http://via.placeholder.com/300x400",
    title: "something three"
  },
  {
    key: 4,
    imageUrl: "http://via.placeholder.com/300x400",
    title: "something four"
  },
  {
    key: 5,
    imageUrl: "http://via.placeholder.com/300x400",
    title: "something five"
  },
  {
    key: 6,
    imageUrl: "http://via.placeholder.com/300x400",
    title: "something six"
  }
];

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       
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
  
});
