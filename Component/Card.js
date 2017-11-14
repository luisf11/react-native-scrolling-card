//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from "react-native-elements";
import Heart from "../assets/icons/heart";

// create a component
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
    render() {
        return (
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
                  {this.props.data.map(item => (
                    <Image
                      key={item.key}
                      source={{ uri: item.imageUrl }}
                      style={styles.image}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.cardFooterContainer}>
              <View style={styles.footerCenter}>
                <Text>{this.props.leftText}</Text>
              </View>
              <View style={styles.footerRight}>
                <Text>{this.props.rightText}</Text>
              </View>
            </View>
          </View>
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
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
        width: 400,
        height: 300
      },
      cardFooterContainer: {
        flex: 1,
        backgroundColor: "yellow",
        flexDirection: "row"
      },
      footerCenter: {
        alignItems: "flex-start",
        flex: 2,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: "blue"
      },
      footerRight: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        alignItems: "flex-start",
        flex: 1,
        backgroundColor: "red"
      },
      scrollViewWrapper: {
        width: 400,
        height: 300
      },
      contentContainer: {
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center"
      }
});

//make this component available to the app
export default Card;
