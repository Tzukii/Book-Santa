import React from "react";

import BookDonateScreen from "../Screens/BookDonateScreen";
import RecieverDetailsScreen from "../Screens/RecieverDetailsScreen";

import { createStackNavigator } from "react-navigation-stack";

export const AppStackNavigator = createStackNavigator(
  {
    BookDonateList: {
      screen: BookDonateScreen,
      navigationOptions: { headerShow: false },
    },
    RecieverDetails: {
      screen: RecieverDetailsScreen,
      navigationOptions: { headerShow: false },
    },
  },
  {
    initialRouteName: "BookDonateList",
  }
);
