import React from "react";
import { StyleSheet, View , Text ,   BackHandler} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useFocusEffect } from "@react-navigation/native";
const VenueScreen = (props) => {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        props.navigation.navigate("Acdemy Screen");
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );


  const item = [
    {
      coordinates: { latitude: 23.259933, longitude: 71.412613 },
    },
    {
      coordinates: { latitude: 20.259933, longitude: 72.412613 },
    },
    {
      coordinates: { latitude: 22.259933, longitude: 73.412613 },
    },
    {
      coordinates: { latitude: 22.259933, longitude: 74.412613 },
    },
    {
      coordinates: { latitude: 22.259933, longitude: 75.412613 },
    },
    {
      coordinates: { latitude: 22.259933, longitude: 76.412613 },
    },
  ];
  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "montserrat-bold",
            paddingTop: 10,
          }}
        >
          Location
        </Text>
        <View
          style={{
            width: "90%",
            height: 320,
            marginTop: 10,
            borderWidth: 2,
          }}
        >
          <MapView
            region={{
              latitude: 23.279933,
              longitude: 71.402613,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009,
            }}
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            mapType="standard"
            region={item?.location}
          >
            {item.map((marker) => (
              <MapView.Marker coordinate={marker.coordinates} />
            ))}
          </MapView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default VenueScreen;
