import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import SettingScreen from "../Screens/SettingScreen.js";
import CustomSideBarMenu from "./CustomSideBarMenu";
import MyDonationsScreen from "../Screens/MyDonationsScreen";
import NotificationScreen from "../Screens/NotificationScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Setting: {
      screen: SettingScreen,
    },
    MyDonations: {
      screen: MyDonationsScreen,
    },
    Notifications: {
      screen: NotificationScreen,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
