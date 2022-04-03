import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenuDetail from "./DrawerMenu";
import AcdemyScreen from "../Screens/Dashboard/AcdemyScreen";
import AcdemyDetailScreen from "../Screens/Dashboard/AcdemyDetailScreen";
import VenueScreen from "../Screens/Dashboard/VenueScreen";

const Drawer = createDrawerNavigator();
const DrawerScreen = (props) => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Acdemy Screen"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#2d415a",
            width: 220,
          },
        }}
        drawerContent={() => <DrawerMenuDetail {...props} />}
      >
        <Drawer.Screen name="Venue Screen" component={VenueScreen} />
        <Drawer.Screen name="Acdemy Screen" component={AcdemyScreen} />
        <Drawer.Group
          screenOptions={{
            //disabling drawer header
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="Acdemy Detail Screen"
            component={AcdemyDetailScreen}
          />
        </Drawer.Group>
      </Drawer.Navigator>
    </>
  );
};
export default DrawerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 80,
  },
});
