import React from "react";
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import Heart from "./assets/icons/heart";
import LikeIcon from "./assets/icons/like.icon";

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
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  
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
              <View style={styles.scrollViewWrapper}>
                <ScrollView
                  contentContainerStyle={styles.contentContainer}
                  horizontal={true}
                  decelerationRate={0}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                  snapToInterval={300}
       >
                  {
                    this.state.data.map((item) => (
                    <Image key={item.key} source={{uri: item.imageUrl}} style={styles.image}/>
                  ))
                  }


                </ScrollView>
              </View>
            </View>
            <View style={styles.cardFooterContainer}>
              <View style={styles.footerCenter}>  
                <Text>footer center container</Text>
              </View>
              <View style={styles.footerRight}>  
                <Text>Rigth content</Text>
              </View>
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
  image: {
    width:400,
    height:300
  },
  cardFooterContainer: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: 'row'
  },
  footerCenter:{
    alignItems: "flex-start",
    flex:2,
    marginTop:5,
    marginBottom:5,
    marginLeft:10,
    marginRight:5,
    backgroundColor: "blue",
  },
  footerRight:{
    marginTop:5,
    marginBottom:5,
    marginRight:5,
    alignItems: "flex-start",
    flex:1,
    backgroundColor: "red",
  },
  scrollViewWrapper:{
    width: 400,
    height: 300,

  },
  contentContainer: {
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center"
  },


});
