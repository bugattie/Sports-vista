import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker} from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import Colors from "../../constant/Colors";
const AcdemyDetailScreen = (props) => {
  const { item } = props?.route?.params?.route;

  let location = {
    latitude: 23.259933,
    longitude: 77.412613,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 230,
        }}
      >
        <Image resizeMode="contain" source={item?.imges} style={{ height: "100%" , width:"100%"}} />
      </View>
    );
  };

  return (
    <>
      <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
        <View
          style={{
            height: "35%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            data={item?.Images}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={300}
            autoplay={true}
            loop={true}
            autoplayInterval={8000}
          />
        </View>
        <View>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 20,
              fontFamily: "montserrat-bold",
            }}
          >
            Acdemy Detail
          </Text>
          <Text>
            <Text style={{ fontFamily: "montserrat-semiBold" }}>Name: </Text>
            <Text style={{ fontSize: 15, fontFamily: "montserrat-bold" }}>
              {item?.Title}
            </Text>
          </Text>
          <Text>
            <Text style={{ fontFamily: "montserrat-semiBold" }}>Time: </Text>
            <Text style={{ fontSize: 15, fontFamily: "montserrat-bold" }}>
              {item?.Time}
            </Text>
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "montserrat-bold",
            paddingTop:10
          }}
        >
          Location
        </Text>
        <View
          style={{
            width: "100%",
            height: 320,
            marginTop:10,
            borderWidth: 2,
            borderColor: Colors.primary,
          }}
        >
          <MapView
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            mapType="standard"
            region={location}
          >
            <Marker
              coordinate={{ latitude: 23.259933, longitude: 77.412613 }}
            />
          </MapView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default AcdemyDetailScreen;
