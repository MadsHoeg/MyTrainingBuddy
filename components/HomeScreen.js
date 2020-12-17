import React, { Component } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from "./Header";
import fitguy1 from "./Pictures/fitguy1.jpg"
import fitguy2 from "./Pictures/fitguy2.jpg"
import fitgirl1 from "./Pictures/fitgirl1.jpg"

export default class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.mainContainer}>
                <View>
                    <Header navigation={this.props.navigation} title='MyTrainingBuddy'></Header>
                </View>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image source={require("./Pictures/fitguy1.jpg")}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require("./Pictures/fitguy2.jpg")}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require("./Pictures/fitgirl1.jpg")}/>
                    </View>
                </Swiper>
            </View>
        );
    }
}

//styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 15,
        paddingRight:20,
        paddingLeft: 20,
    },
    text2: {
        color: 'black',
        fontSize: 25,
        paddingRight:20,
        paddingLeft: 20,
        alignItems: 'center',
        marginTop: 35,
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
