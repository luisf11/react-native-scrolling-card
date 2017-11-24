import React from "react";
import Card from './Component/Card'
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";


const DATA = [
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

      <Card 
      data={DATA}
      />
       
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
