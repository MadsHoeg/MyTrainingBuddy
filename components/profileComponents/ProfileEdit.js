import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TextInput, Button} from 'react-native';
import {CheckBox} from "react-native-elements";


export default class ProfileEdit extends Component {

    static navigationOptions={
        title:'ProfileEdit'
    }


    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <Text style={{fontWeight:'bold'}}>Klik på tekst for at ændre</Text>
                    <View style={[styles.card, styles.profileCard]}>
                        <Image style={styles.avatar} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
                        <TextInput style={styles.name}>John Doe </TextInput>
                    </View>

                    <View style={styles.card}>
                        <TextInput style={styles.cardTittle}>Personlig information</TextInput>
                        <TextInput> - Lorem ipsum dolor sit amet</TextInput>
                        <TextInput> - Lorem ipsum dolor sit amet</TextInput>
                        <TextInput> - Lorem ipsum dolor sit amet</TextInput>
                    </View>

                    <View style={styles.photosCard}>
                        <Text style={styles.cardTittle}>Photos</Text>
                        <View style={styles.photosContainer}>
                            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
                            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
                            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
                            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
                            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
                            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
                        </View>
                    </View>
                    <View styles={styles.settingsCard}>
                        <Text style={{fontWeight:'bold', fontSize:20}}> Søgeindstillinger</Text>
                        <Text style={{fontWeight:'bold'}}>Min. Alder</Text>
                        <TextInput>18</TextInput>
                        <Text style={{fontWeight:'bold'}}>Max. Alder</Text>
                        <TextInput>99</TextInput>
                        <Text style={{fontWeight:'bold'}}>Søgeradius i km</Text>
                        <TextInput>5</TextInput>
                        <Text style={{fontWeight:'bold'}}>Fitnesskæder</Text>
                        <CheckBox
                        title='Fitnessworld'
                        />
                        <CheckBox
                            title='Sats'
                        />
                        <CheckBox
                            title='Arca'
                        />
                        <CheckBox
                            title='Urban Gym'
                        />
                        <CheckBox
                            title='Repeat'
                        />
                        <Text style={{fontWeight:'bold'}}>Ugentlig antal træning</Text>
                        <CheckBox
                            title='0-1'
                        />
                        <CheckBox
                            title='2-3'
                        />
                        <CheckBox
                            title='4-5'
                        />
                        <CheckBox
                            title='6-7'
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor : "#DCDCDC"
    },
    cardTittle:{
        color:"#808080",
        fontSize:22,
        marginBottom:5,
    },
    avatar:{
        width:150,
        height:150,
    },
    card:{
        backgroundColor: "#FFFFFF",
        borderRadius:10,
        padding:10,
        height:100,
        marginTop:10,
    },
    profileCard:{
        height:200,
        alignItems: 'center',
        marginTop:20,
    },
    name:{
        marginTop:10,
        fontSize:22,
        color:"#808080",
    },
    photosContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
    },
    photosCard:{
        marginTop:10,
    },
    photo:{
        width:113,
        height:113,
        marginTop:5,
        marginRight:5,
    },
    settingsCard:{
        backgroundColor: "#FFFFFF",
        borderRadius:10,
        padding:10,
        height:100,
        marginTop:10,
    },
});
