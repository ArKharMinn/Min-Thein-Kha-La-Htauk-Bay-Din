import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";

const NavBar = () => {
  return (
    <View style={tw`bg-white shadow-sm`}>
      <View style={tw`flex-row items-center justify-between px-4 py-3`}>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require("@/assets/images/mintheinkha.png")}
            style={tw`w-10 h-10 rounded-full mr-2 border border-blue-100`}
            resizeMode="contain"
          />
          <Text style={tw`text-lg font-semibold text-blue-800`}>
            La Htauk Bay Din
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NavBar;
