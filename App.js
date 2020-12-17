import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';
import chatStack from "./components/ChatNavigator";
import MapScreen from "./components/MapScreen"
import profileStack from "./components/ProfileNavigator";

const TabNavigator = createBottomTabNavigator(
    {
      //Tilføjer routes
      Home: {
        //Viewet som loades
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "Hjem",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" size={30} color={tintColor}/>
          )
        },
      },
      Chat: {
        screen: chatStack,
        navigationOptions: {
          tabBarLabel: "Beskeder",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="chatbox-outline" size={30} color={tintColor}/>
          )
        },
      },
      Map: {
        screen: MapScreen,
        navigationOptions: {
          tabBarLabel: "Kort",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="navigate-outline" size={30} color={tintColor}/>
          )
        },
      },
      Profile: {
        screen: profileStack,
        navigationOptions: {
          tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-person" size={30} color={tintColor}/>
          )
        },
      },
    },
)

export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  tabIcon: {
    width: 32,
    height: 32,
    tintColor: 'red'
  },
});
